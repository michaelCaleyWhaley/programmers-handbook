#!/bin/bash

# use | to pass the output of one command to another. e.g. `ls -l /usr/bin | grep bash`
# this command prints the lists contents of directory with detailed information `-l`. Then uses grep to filter only the references to bash.

ls -l /usr/bin | grep bash
