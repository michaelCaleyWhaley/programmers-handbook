####################################################
# SHARED
####################################################

data "aws_iam_policy_document" "lambda_assume_role_policy" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }

    actions = ["sts:AssumeRole"]
  }
}

resource "aws_iam_role" "advent_calendar_lambda_role" {
  name               = "advent_calendar_basic-lambda-role"
  assume_role_policy = data.aws_iam_policy_document.lambda_assume_role_policy.json
}


resource "aws_iam_policy" "advent_calendar_logging_policy" {
  name = "advent-calendar-logging-policy"
  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        Action : [
          "logs:CreateLogStream",
          "logs:PutLogEvents",
        ],
        Effect : "Allow",
        Resource : "arn:aws:logs:*:*:*"
      },

    ]
  })
}

resource "aws_iam_role_policy_attachment" "advent_calendar_logging_policy_attachment" {
  role       = aws_iam_role.advent_calendar_lambda_role.id
  policy_arn = aws_iam_policy.advent_calendar_logging_policy.arn
}


####################################################
# UNPROTECTED LAMBDA
####################################################
resource "aws_lambda_function" "advent_calendar_function" {
  function_name = "advent_calendar_function"
  role          = aws_iam_role.advent_calendar_lambda_role.arn
  handler       = "presigned.main"
  runtime       = "provided.al2023"

  # Workaround to avoid needing to set filename in this repo
  filename = "./server.zip"
  lifecycle {
    ignore_changes = [
      filename,
      environment.0.variables["GITHUB_CLIENT_ID"],
      environment.0.variables["GITHUB_CLIENT_SECRET"],
    ]
  }

  environment {
    variables = {
      "GIN_MODE" = "release"
    }
  }


}
