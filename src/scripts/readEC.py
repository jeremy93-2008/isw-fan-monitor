#! /usr/bin/python

import sys
import time
import configparser

# Global vars
EC_IO_FILE = '/sys/kernel/debug/ec/ec0/io'
CFG_FILE = '/etc/isw.conf'

with open(CFG_FILE) as cfgfile:
		cfgp = configparser.ConfigParser()
		cfgp.read_file(cfgfile)
		ap = cfgp.get(sys.argv[1], 'address_profile')
		rcta = int(cfgp.get(ap, 'realtime_cpu_temp_address'),16)
		rcfsa = int(cfgp.get(ap, 'realtime_cpu_fan_speed_address'),16)
		rcfra = int(cfgp.get(ap, 'realtime_cpu_fan_rpm_address'),16)
		rgta = int(cfgp.get(ap, 'realtime_gpu_temp_address'),16)
		rgfsa = int(cfgp.get(ap, 'realtime_gpu_fan_speed_address'),16)
		rgfra = int(cfgp.get(ap, 'realtime_gpu_fan_rpm_address'),16)
try:
    while True:
        with open(EC_IO_FILE,'rb') as file:
            file.seek(rcta)
            temp_cpu = int(file.read(1).hex(),16)
            file.seek(rcfsa)
            fans_cpu = int(file.read(1).hex(),16)
            file.seek(rcfra)
            fanr_cpu = int(file.read(2).hex(),16)
            file.seek(rgta)
            temp_gpu = int(file.read(1).hex(),16)
            file.seek(rgfsa)
            fans_gpu = int(file.read(1).hex(),16)
            file.seek(rgfra)
            fanr_gpu = int(file.read(2).hex(),16)
            if int(fanr_cpu) != 0:
                fanr_cpu = 478000//int(fanr_cpu)
            if int(fanr_gpu) != 0:
                fanr_gpu = 478000//int(fanr_gpu)
            time.sleep(2)
            print(str(temp_cpu)+'°C,'+str(fans_cpu)+'%,' + str(fanr_cpu)+'RPM;' + str(temp_gpu)+'°C,' + str(fans_gpu)+'%,' + str(fanr_gpu)+'RPM', file=sys.stdout)
except:
    print("nada", file=sys.stdout)
        