#!/bin/bash

# Get WiFi information
echo "===== WiFi Information ====="

# WiFi SSID (Network Name)
wifi_ssid=$(iwgetid -r)
if [ -z "$wifi_ssid" ]; then
  echo "WiFi Status: Not Connected"
else
  echo "WiFi SSID: $wifi_ssid"
  
  # WiFi IP Address
  wifi_ip=$(ip -o -4 addr show wlan0 | awk '{print $4}' | cut -d/ -f1)
  echo "WiFi IP Address: ${wifi_ip:-Unavailable}"
  
  # WiFi Password (requires superuser privileges)
  wifi_password=$(sudo grep -r "^psk=" /etc/NetworkManager/system-connections/ 2>/dev/null | grep "$wifi_ssid" | awk -F'=' '{print $2}')
  echo "WiFi Password: ${wifi_password:-[Hidden or Unavailable]}"
fi

echo ""

# Get Bluetooth information
echo "===== Bluetooth Information ====="

# Bluetooth Status
bluetooth_status=$(bluetoothctl show | grep "Powered" | awk '{print $2}')
if [[ $bluetooth_status == "yes" ]]; then
  echo "Bluetooth Status: Enabled"
  
  # Connected Bluetooth Devices
  connected_devices=$(bluetoothctl paired-devices | awk '/Device/ {print $2, $3, $4, $5}')
  if [ -z "$connected_devices" ]; then
    echo "Connected Devices: None"
  else
    echo "Connected Devices:"
    bluetoothctl info | awk '/Device/ || /Connected/' | sed 's/^/  /'
  fi
else
  echo "Bluetooth Status: Disabled"
fi

echo ""
echo "===== Script Completed ====="
