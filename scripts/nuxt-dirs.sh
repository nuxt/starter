#!/bin/sh

for dir in assets components composables content layouts middleware pages public server utils; do
  mkdir -p $dir
done
