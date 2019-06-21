#!/bin/bash

name=$1
dt=`date '+%Y-%m-%d'`

if [ "$1" = "all" ]
then
   echo "Backing up everything!"
   cp -irv ../Websites ../Websites-$dt
   rsync -a ../Websites-$dt ../"Dropbox (Ronde Vormen)"/Websites/
   rm -rf ../Websites-$dt
else
   echo "Backing up $1!"
   cp -irv $1 $1-$dt
   rsync -a $1-$dt ../"Dropbox (Ronde Vormen)"/Websites/
   rm -rf $1-$dt
fi
