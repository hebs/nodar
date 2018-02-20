#!/bin/bash
smartnodelist='/home/smartadmin/nodar/smartnodelist.csv'
rm -f $smartnodelist;
smartcash-cli smartnodelist full > $smartnodelist;
sed -i 's/  \"COutPoint(//g' $smartnodelist;
sed -i 's/, /|/g' $smartnodelist;
sed -i 's/)\": \"/|/g' $smartnodelist;
sed -i 's/",/|/g' $smartnodelist;
sed -i 's/ /|/g' $smartnodelist;
sed -i 's/||||||||||||/|/g' $smartnodelist;
sed -i 's/|||||||||||/|/g' $smartnodelist;
sed -i 's/||||||||||/|/g' $smartnodelist;
sed -i 's/|||||||||/|/g' $smartnodelist;
sed -i 's/||||||||/|/g' $smartnodelist;
sed -i 's/|||||||/|/g' $smartnodelist;
sed -i 's/||||||/|/g' $smartnodelist;
sed -i 's/|||||/|/g' $smartnodelist;
sed -i 's/||||/|/g' $smartnodelist;
sed -i 's/|||/|/g' $smartnodelist;
sed -i 's/||/|/g' $smartnodelist;
sed -i 's/|/,/g' $smartnodelist;
sed -i 's/:9678,/:9678/g' $smartnodelist;
sed -i 's/:9678"/:9678/g' $smartnodelist;
sed -i 's/{/txid,index,status,protocol,payee,lastseen,activeseconds,lastpaidtime,lastpaidblock,IP/g' $smartnodelist;
sed -i 's/}//g' $smartnodelist;
#mongoimport -h ds027779.mlab.com:27779 -d nodar -c smartnodesfull -u nodardev -p Sl0wness --type csv --file $smartnodelist --headerline --upsertFields payee
mongoimport -h main:27017 -d nodar -c smartnodesfull --type csv --file $smartnodelist --headerline --upsertFields payee
