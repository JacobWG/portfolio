import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Accordion from '../components/Accordion';
import Alert from '@mui/material/Alert';
import Link from '@mui/material/Link';
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

export default function DeviceHealth() {
    return (
        <Box className='article samples devicehealth'>
            <Button variant="contained" href={'https://support.zonarsystems.net/hc/en-us/articles/30203795414925-Device-Health'} target={'_blank'} sx={{mb:2}}>Link to Live Article</Button>
            <Typography variant={"h1"}>Device Health</Typography>
            <Divider />
            <Typography>The Device Health reports allow you to keep an eye on
                the functioning of Zonar devices for your fleet. Each report on this
                page shows the history of recorded events from one of several Zonar
                device types, providing critical information each time.</Typography>
            <Alert severity="info">Your company may not use some of the equipment these reports are designed for. Those reports will display zero results.</Alert>
            <Typography>Reports include:</Typography>
            <List>
                <ListItem>
                    <Link href="#deviceoverview">Device Overview</Link>: For a quick look at all devices in your fleet and see which ones need attention.</ListItem>
                <ListItem>
                    <Link href="#tcuevents">TCU Phone Homes</Link>: For Zonar telematics control units (TCUs) such as the V4 or LD TCU.</ListItem>
                <ListItem>
                    <Link href="#tabletevents">Tablet Phone Homes</Link>: For Samsung TabActive tablets.</ListItem>
                <ListItem>
                    <Link href="#rfidevents">RFID Phone Homes</Link>: For RFID card readers such as Z Pass or Operator ID units.</ListItem>
                <ListItem>
                    <Link href="#2010events">2010 Handheld Events</Link>: For 2010 handheld devices.</ListItem>
            </List>
            <Box id="deviceoverview">
                <Typography variant='h2'>Device Overview</Typography>
                <Typography>The Device Overview page allows you to see the health of your fleet's
                    various Zonar devices at a glance. Use this report to identify what
                    units need attention, then consult the device-specific reports to drill
                    down further.</Typography>
                <Box component={"img"} src="/assets/device_health/device-overview.png" alt="device-overview.png" />
                <List component='ol'>
                    <ListItem>
                        <strong>Filters</strong>: Select individual filters to narrow the list to only desired devices.<List>
                        <ListItem>
                            <strong>Last known asset</strong>: Click to select one or more assets that communicated with a fleet device. Defaults to all assets.</ListItem>
                        <ListItem>
                            <strong>Asset Properties</strong>: Click to select one or more asset properties devices should filter to. Defaults to all properties. See <Link href="https://support.zonarsystems.net/hc/en-us/articles/30203705803789">Asset Properties</Link> for more information.</ListItem>
                        <ListItem>
                            <strong>Health</strong>: Click to select one or more health ratings.
                            Defaults to all ratings. See Device Readiness for an explanation of the
                            health ratings.</ListItem>
                        <ListItem>
                            <strong>Family</strong>: Click to select one or more device types. Defaults to all types. Available types are:<List>
                            <ListItem>
                                <strong>TCU</strong>: For Zonar telematics control units (TCUs) such as the V4 or LD TCU.</ListItem>
                            <ListItem>
                                <strong>Tablet</strong>: For Samsung TabActive tablets.</ListItem>
                            <ListItem>
                                <strong>RFID Reader</strong>: For RFID card readers such as Z Pass or Operator ID units.</ListItem>
                            <ListItem>
                                <strong>Inspection</strong>: For 2010 handheld devices.</ListItem>
                        </List>
                        </ListItem>
                        <ListItem>
                            <strong>Model</strong>: Click to select one or more device models, or
                            subtypes within the larger device families. Defaults to all models.
                            Available models depend on the devices present in your account.</ListItem>
                        <ListItem>
                            <strong>Device ID</strong>: Click to select one or more device IDs (serial numbers) devices should filter to. Defaults to all devices.</ListItem>
                    </List>
                    </ListItem>
                    <ListItem>
                        <strong>Device Readiness</strong>: Displays the total number of filtered devices that fall into each health rating. Health ratings can be customized in <Link href="https://support.zonarsystems.net/hc/en-us/articles/25794854106381">Threshold Settings</Link>, but the default values are:<List>
                        <ListItem>
                            <strong><Box component={"img"} className={"icon"} src="/assets/device_health/red-square-critical-severity.png" alt="red-square-critical-severity.png" width="14" height="14" /> Critical</strong>: The last phone home is more than 72 hours old.</ListItem>
                        <ListItem>
                            <strong><Box component={"img"} className={"icon"} src="/assets/device_health/evir-minor-defect.png" alt="evir-minor-defect.png" width="16" height="14" /> Warning</strong>: The last phone home is between 24 and 72 hours old.</ListItem>
                        <ListItem>
                            <strong><Box component={"img"} className={"icon"} src="/assets/device_health/green-circle.png" alt="green-circle.png" width="14" height="14" /> Normal</strong>: The last phone home is less than 24 hours old.</ListItem>
                    </List>
                    </ListItem>
                    <ListItem>
                        <strong>Device Health Issues</strong>: Displays the health ratings per device as a bar graph, filtered to the above selections.</ListItem>
                    <ListItem>
                        <strong>Devices</strong>: Displays a detailed list of devices filtered to the above selections. Each device displays the following information:<List>
                        <ListItem>
                            <strong>Health</strong>: Displays the health rating for the device. See Device Readiness for an explanation of the health ratings.</ListItem>
                        <ListItem>
                            <strong>Last Known Asset</strong>: Displays the ID of the last asset that communicated with the device.</ListItem>
                        <ListItem>
                            <strong>Family</strong>: Displays the device type.</ListItem>
                        <ListItem>
                            <strong>Model</strong>: Displays the device model, or subtype within the larger device family.</ListItem>
                        <ListItem>
                            <strong>Device ID</strong>: Displays the serial number of the device.</ListItem>
                        <ListItem>
                            <strong>Firmware</strong>: Displays the last reported firmware on the device.</ListItem>
                        <ListItem>
                            <strong>Last Phone Home (MM/DD/YYYY)</strong>: Displays the last time
                            the device successfully communicated with Zonar, with the date and time
                            in the user’s browser time zone of when the event was created.</ListItem>
                        <ListItem>
                            <strong>Events</strong>: Click to view events for the specified device using the relevant Device Health report.</ListItem>
                    </List>
                    </ListItem>
                </List>
            </Box>
            <Box id="tcuevents">
                <Typography variant='h2'>TCU Phone Homes</Typography>
                <Typography>This report displays all phone home (also known as heartbeat or
                    regular health) events sent by Zonar TCUs such as the V4 or LD TCU.</Typography>
                <Box component={"img"} src="/assets/device_health/tcu-phone-homes.png" alt="tcu-phone-homes.png"/><List component='ol'>
                <ListItem>
                    <strong>Filters</strong>: Select individual filters to narrow the list to only desired events.<List>
                    <ListItem>
                        <strong>Date Range</strong>: Click to define the range of time events should filter to. Defaults to previous 7 days.</ListItem>
                    <ListItem>
                        <strong>Asset</strong>: Click to select one or more assets in your account events should filter to. Defaults to all assets.</ListItem>
                    <ListItem>
                        <strong>Device ID</strong>: Click to select one or more device IDs (serial numbers) events should filter to. Defaults to all devices.</ListItem>
                    <ListItem>
                        <strong>Asset Properties</strong>: Click to select one or more asset
                        properties events should filter to. Defaults to all properties. See
                        Asset Properties for more information.</ListItem>
                </List>
                </ListItem>
                <ListItem>
                    <strong>Phone Homes</strong>: Displays the list of events filtered by the above selections. The number in parentheses is the total number of events.<List>
                    <ListItem>
                        <strong>GPSSN</strong>: Displays the unique identifier for the GPS serial number of the device.</ListItem>
                    <ListItem>
                        <strong>Last Known Asset</strong>: Displays the ID of the last asset that communicated with the device.</ListItem>
                    <ListItem>
                        <strong>Phone Home (MM/DD/YYYY)</strong>: Displays the last time the
                        device successfully communicated with Zonar, with the date and time in
                        the user’s browser time zone of when the event was created.</ListItem>
                    <ListItem>
                        <strong>Address</strong>: Displays the location where the device last communicated from. Click the address to view it on a pop-up map.</ListItem>
                    <ListItem>
                        <strong>FW Version</strong>: Indicates the firmware version installed on the device at the time of the phone home.</ListItem>
                    <ListItem>
                        <strong>Battery Voltage</strong>: Displays the battery voltage of the
                        device at the time of the phone home. Useful for diagnosing devices that
                        may have power issues.</ListItem>
                    <ListItem>
                        <strong>Unsent GPS</strong>: Displays the number of GPS packets that
                        were not successfully transmitted by the device. A high number may
                        indicate connectivity issues.</ListItem>
                    <ListItem>
                        <strong>Unsent Data</strong>: Displays the amount of non-GPS data (e.g.,
                        sensor data) that wasn’t successfully transmitted by the device. A high
                        number may indicate connectivity issues.</ListItem>
                    <ListItem>
                        <strong>GPS Antennae State</strong>: Displays the state of the device’s GPS antenna:<List>
                        <ListItem>
                            <strong>Internal</strong>: The TCU is receiving GPS data via its internal antenna.</ListItem>
                        <ListItem>
                            <strong>External</strong>: The TCU is receiving GPS data via an external antenna connected to the TCU.</ListItem>
                    </List>
                    </ListItem>
                    <ListItem>
                        <strong>ECM Connection Type</strong>: Displays the type of connection to
                        the Electronic Control Module (ECM), such as J1708, J1939, or OBDII,
                        depending on the vehicle.  On occasion there can be multiple
                        protocols active at once.</ListItem>
                </List>
                </ListItem>
            </List>
            </Box>
            <Box id="tabletevents">
            <Typography variant='h2'>Tablet Phone Homes</Typography>
            <Typography>This report displays all phone home (also known as heartbeat or regular health) events sent by Samsung TabActive tablets.</Typography>
            <Box component={"img"} src="/assets/device_health/tablet-phone-homes.png" alt="tablet-events.png"/>
            <List component='ol'>
                <ListItem>
                    <strong>Filters</strong>: Select individual filters to narrow the list to only desired events.<List>
                    <ListItem>
                        <strong>Date Range</strong>: Click to define the range of time events should filter to. Defaults to previous 7 days.</ListItem>
                    <ListItem>
                        <strong>Asset</strong>: Click to select one or more assets in your account events should filter to. Defaults to all assets.</ListItem>
                    <ListItem>
                        <strong>Device ID</strong>: Click to select one or more device IDs (serial numbers) events should filter to. Defaults to all devices.</ListItem>
                    <ListItem>
                        <strong>Asset Properties</strong>: Click to select one or more asset
                        properties events should filter to. Defaults to all properties. See
                        Asset Properties for more information.</ListItem>
                </List>
                </ListItem>
                <ListItem>
                    <strong>Phone Homes</strong>: Displays the list of events filtered by the above selections. The number in parentheses is the total number of events.<List>
                    <ListItem>
                        <strong>Asset</strong>: Displays the asset name as defined in Manage
                        Assets. Clicking the asset name takes you to the asset profile, and
                        clicking the info button displays asset details. See Asset Profile for
                        more information.</ListItem>
                    <ListItem>
                        <strong>Device ID</strong>: Displays the device ID which performed the inspection.</ListItem>
                    <ListItem>
                        <strong>Phone Home (MM/DD/YYYY)</strong>: Displays the last
                        successful communication ("phone home") from the device, including the
                        date and time in the user’s browser time zone.</ListItem>
                    <ListItem>
                        <strong>Model</strong>: Displays the model number or type of the device.</ListItem>
                    <ListItem>
                        <strong>Firmware</strong>: Displays the version of the firmware installed on the device.</ListItem>
                    <ListItem>
                        <strong>Battery Level</strong>: Displays the percentage of charge remaining in the battery.</ListItem>
                    <ListItem>
                        <strong>Installed Apps</strong>: Displays the list of other specific Zonar apps on the tablet. Hover over the name of the app for its specific version.</ListItem>
                    <ListItem>
                        <strong>Export CSV</strong>: Click to generate a CSV file of the
                        filtered events that can be viewed in Excel or another spreadsheet
                        program. The provided CSV will show all columns whether they are
                        displayed on the report or not.</ListItem>
                </List>
                </ListItem>
            </List>
            <Typography>The data listed above are the default columns shown. There are
                numerous columns available which provide significant detail on the
                tablet's health should they be necessary. Use the <Box component={"img"} className={"icon"} src="/assets/device_health/column-picker.png" alt="column-picker.png" /> column picker to select which data to display. See the list below for the full range of data columns available.</Typography>
            <Accordion title={"Full List of Tablet Columns"}>
                <List>
                    <ListItem>
                        <strong>Asset</strong>: Displays the asset ID that the device was associated with at the time.</ListItem>
                    <ListItem>
                        <strong>Phone Home (MM/DD/YYYY)</strong>: Displays the last successful phone home from the device, including the date and time in the user’s browser time zone.</ListItem>
                    <ListItem>
                        <strong>Firmware</strong>: Displays the version of the firmware installed on the device.</ListItem>
                    <ListItem>
                        <strong>Model</strong>: Displays the model number or type of the device.</ListItem>
                    <ListItem>
                        <strong>Serial Number</strong>: Displays the serial number for the device’s hardware.</ListItem>
                    <ListItem>
                        <strong>WiFi Type</strong>: Displays the type of WiFi connection.</ListItem>
                    <ListItem>
                        <strong>WiFi Status</strong>: Displays whether WiFi is enabled on the device.</ListItem>
                    <ListItem>
                        <strong>Last Connection to GTC</strong>: Displays the last time the device interacted directly with Ground Traffic Control.</ListItem>
                    <ListItem>
                        <strong>Driver Cache Enabled</strong>: Displays whether the
                        driver's data cache is enabled on the device. This allows a driver to
                        log in while the device is offline, provided they have logged in
                        recently prior.</ListItem>
                    <ListItem>
                        <strong>Outbound Incomplete Count</strong>: Displays the number of
                        incomplete outbound transmissions from the device.  A high number
                        can indicate poor cell coverage or other problems.</ListItem>
                    <ListItem>
                        <strong>Outbound Resent Count</strong>: Displays the number of
                        times data had to be resent from the device.  A high number can
                        indicate poor cell coverage or other problems.</ListItem>
                    <ListItem>
                        <strong>Battery Temperature (C)</strong>: Displays the current battery temperature of the device in degrees Celsius.</ListItem>
                    <ListItem>
                        <strong>Battery Voltage</strong>: Displays the device's battery voltage.</ListItem>
                    <ListItem>
                        <strong>Battery Status</strong>: Displays whether the battery is charging, discharging, or full.</ListItem>
                    <ListItem>
                        <strong>Battery Health</strong>: Displays the overall condition of the battery.</ListItem>
                    <ListItem>
                        <strong>Battery Level</strong>: Displays the percentage of charge remaining in the battery.</ListItem>
                    <ListItem>
                        <strong>Power Source</strong>: Displays the current source of power for the device.<List>
                        <ListItem>
                            <strong>USB</strong>: Device is charged from an external power source, like a USB Charger.</ListItem>
                        <ListItem>
                            <strong>AC</strong>: Device is charging through Pogo PINs, typically while docked.</ListItem>
                        <ListItem>
                            <strong>Battery</strong>: Device is not charging and drawing power from the internal device battery.</ListItem>
                    </List>
                    </ListItem>
                    <ListItem>
                        <strong>Bluetooth Enabled</strong>: Displays whether Bluetooth is enabled on the device.</ListItem>
                    <ListItem>
                        <strong>Docked</strong>: Displays whether the device is currently docked in a vehicle mount.</ListItem>
                    <ListItem>
                        <strong>Device Uptime (HH:MM:SS)</strong>: Displays the total time the device has been up and running since last reset.</ListItem>
                    <ListItem>
                        <strong>Available Storage (GB)</strong>: Displays the amount of free storage space available on the device.</ListItem>
                    <ListItem>
                        <strong>Modem State</strong>: Displays whether the device’s modem is connected or disconnected.</ListItem>
                    <ListItem>
                        <strong>SIM Card State</strong>: Displays the current status of the SIM card.</ListItem>
                    <ListItem>
                        <strong>Carrier Name</strong>: Displays the name of the cellular carrier that provides the device’s connection (e.g., AT&amp;T).</ListItem>
                    <ListItem>
                        <strong>Shell Version</strong>: Displays the version of the device’s shell or launcher software.</ListItem>
                    <ListItem>
                        <strong>Installed Apps</strong>: Displays the list of other specific Zonar apps on the tablet. Hover over the name of the app for its specific version.
                    </ListItem>
                </List>
            </Accordion>
            </Box>
            <Box id="rfidevents">
                <Typography variant='h2'>RFID Phone Homes</Typography>
                <Typography>This report displays all phone home (also known as heartbeat or
                    regular health) events sent by RFID card readers such as Z Pass or
                    Operator ID units.</Typography>
                <Box component={"img"} src="/assets/device_health/rfid-phone-homes.png" alt="rfid-phone-homes.png" />
                <List component='ol'>
                    <ListItem>
                        <strong>Filters</strong>: Select individual filters to narrow the list to only desired events.<List>
                        <ListItem>
                            <strong>Date Range</strong>: Click to define the range of time events should filter to. Defaults to previous 7 days.</ListItem>
                        <ListItem>
                            <strong>Last Known Asset</strong>: Click to select one or more assets in your account events should filter to. Defaults to all assets.</ListItem>
                        <ListItem>
                            <strong>Asset Properties</strong>: Click to select one or more asset
                            properties events should filter to. Defaults to all properties. See
                            Asset Properties for more information.</ListItem>
                    </List>
                    </ListItem>
                    <ListItem>
                        <strong>Phone Homes</strong>: Displays the list of events filtered by the above selections. The number in parentheses is the total number of events.<List>
                        <ListItem>
                            <strong>Asset</strong>: Displays the asset ID last associated with the RFID reader at the time of the communication.</ListItem>
                        <ListItem>
                            <strong>Phone Home (MM/DD/YYYY)</strong>: Displays the date and time when the RFID reader last communicated with Zonar ("phoned home") in the user’s browser time zone.</ListItem>
                        <ListItem>
                            <strong>Firmware Version</strong>: Displays the version of the firmware currently installed on the RFID reader.</ListItem>
                        <ListItem>
                            <strong>Cold Start</strong>: Displays whether or not the phone home was sent as the result of the Zonar equipment regaining power after being disconnected.</ListItem>
                        <ListItem>
                            <strong>Unsent ZPass File Count</strong>: Displays the number of ZPass
                            card scans that were not successfully sent by the device at the time of
                            the phone home.  A high number may indicate connectivity issues.</ListItem>
                    </List>
                    </ListItem>
                </List>
            </Box>
            <Box id="2010events">
                <Typography variant='h2'>2010 Handheld Events</Typography>
                <Typography>This report displays all inspection events performed by a 2010 handheld inspection device.</Typography>
                <Box component={"img"} src="/assets/device_health/2010-handheld-events.png" alt="inspection-device.png" />
                <List component='ol'>
                    <ListItem>
                        <strong>Filters</strong>: Select individual filters to narrow the list to only desired events.<List>
                        <ListItem>
                            <strong>Date Range</strong>: Click to define the range of time events should filter to. Defaults to previous 7 days.</ListItem>
                        <ListItem>
                            <strong>Asset</strong>: Click to select one or more assets in your account events should filter to. Defaults to all assets.</ListItem>
                        <ListItem>
                            <strong>Asset Properties</strong>: Click to select one or more asset
                            properties events should filter to. Defaults to all properties. See
                            Asset Properties for more information.</ListItem>
                        <ListItem>
                            <strong>Device ID</strong>: Click to select one or more device IDs (serial numbers) events should filter to. Defaults to all devices.</ListItem>
                    </List>
                    </ListItem>
                    <ListItem>
                        <strong>Events</strong>: Displays the list of events filtered by the above selections. The number in parentheses is the total number of events.<List>
                        <ListItem>
                            <strong>Asset</strong>: Displays the asset name as defined in Manage
                            Assets. Clicking the asset name takes you to the asset profile, and
                            clicking the info button displays asset details. See Asset Profile for
                            more information.</ListItem>
                        <ListItem>
                            <strong>Device ID</strong>: Displays the device ID which performed the inspection.</ListItem>
                        <ListItem>
                            <strong>Firmware Version</strong>: Displays the firmware version on the device at the time of inspection.</ListItem>
                        <ListItem>
                            <strong>Latest Inspection Date</strong>: Displays the date and time the inspection was performed. The timezone is determined by your computer settings.</ListItem>
                        <ListItem>
                            <strong>Export CSV</strong>: Click to generate a CSV file of the filtered events that can be viewed in Excel or another spreadsheet program.</ListItem>
                    </List>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}