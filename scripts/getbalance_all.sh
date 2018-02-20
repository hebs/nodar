#!/bin/bash

node_addrs=$(smartcash-cli smartnode list full | sed -e 's/.*90024 //' -e 's/ .*//' | grep -v -F -e "{" -e "}")

for address in $node_addrs;
  do
  echo $address: `curl --silent https://explorer3.smartcash.cc/ext/getbalance/$address`
  done
