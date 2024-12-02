# static website S3 bucket
resource "aws_s3_bucket" "advent-calendar-website" {
  bucket = "advent-calendar-website"

  tags = {
    Name = "rolodex website bucket"
  }
}

resource "aws_s3_bucket_website_configuration" "advent-calendar-website-config" {
  bucket = "advent-calendar-website"

  index_document {
    suffix = "index"
  }
  error_document {
    key = "404"
  }
}

# manually enable public access on AWS
resource "aws_s3_bucket_public_access_block" "advent-calendar-website-public" {
  bucket = aws_s3_bucket.advent-calendar-website.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "allow-public-access" {
  bucket = "advent-calendar-website"
  policy = data.aws_iam_policy_document.s3_read_permissions.json
}


data "aws_iam_policy_document" "s3_read_permissions" {
  statement {
    principals {
      type        = "AWS"
      identifiers = ["*"]
    }
    sid    = "PublicReadGetObject"
    effect = "Allow"
    actions = [
      "s3:GetObject",
    ]
    resources = ["arn:aws:s3:::advent-calendar-website/*"]
  }
}