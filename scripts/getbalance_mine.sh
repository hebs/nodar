#!/bin/bash

while read address;
  do
  echo $address: `curl --silent https://explorer3.smartcash.cc/ext/getbalance/$address`
  done < node_addresses
