#!/usr/bin/env bash

# User supplied: 0000-00-00-post-title.markdown
old_file=$1

# User supplied: 1111-11-11
new_number=$2

# Name and extension of the file: post-title.markdown
slug_ext=$(echo "$old_file" | cut -d'-' -f4- -)

# New complete file name: 1111-11-11-post-title.markdown
new_file=$new_number-$slug_ext

# Old/new posts for replacement:
old_post=$(echo "$old_file" | cut -d'.' -f1 -)
new_post=$(echo "$new_file" | cut -d'.' -f1 -)

# First, move the file
git mv $old_file $new_file

# Next, update any references (like post_url links)
replacement=s/$old_post/$new_post/
sed -i '$replacement' *

