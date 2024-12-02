
# Normally apply this block before backend
# resource "aws_s3_bucket" "advent-calendar-terraform" {
#   bucket = "advent-calendar-terraform-state"

#   tags = {
#     Name        = "advent-calendar-terraform-state"
#     Environment = "prod"
#   }
# }

terraform {
  backend "s3" {
    bucket = "advent-calendar-terraform-state"
    region = "eu-west-2"
  }
}