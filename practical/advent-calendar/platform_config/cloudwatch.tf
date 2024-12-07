resource "aws_cloudwatch_log_group" "advent_calendar_function" {
  name              = "/aws/lambda/${aws_lambda_function.advent_calendar_function.function_name}"
  retention_in_days = 3
  lifecycle {
    prevent_destroy = false
  }
}
