import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Divider from "@mui/material/Divider";

export default function Gendata() {
    return (
        <Box className="article samples gendata">
            <Typography variant="h1">Gendata</Typography>
            <Divider />
            <Typography variant="h2" id="01H7TKCZV6TE0VTS84Q7R8SJ34">Purpose</Typography>
            <Typography>This article is intended to explain the basics of gendata packets and how to interpret the data contained in them.</Typography>
            <Typography className="note">For information on using the gendata tool, see <Link href="https://support.zonarsystems.net/hc/en-us/articles/360020914652">Gendata Extractor</Link>.</Typography>
            <Typography variant="h2" id="01H7TKCZV6TJEZBRGDPS5ST48K">Gendata Structure</Typography>
            <Typography>Gendata (short for Generic Data) is a data type produced and transmitted by Zonar GPS units. The type is called generic because it can be used to send any kind of data, as opposed to types like GPS points which have a very specific structure. As new Zonar services and hardware are developed, gendata can be expanded to transfer new kinds of data and provide visibility into current status and troubleshooting.</Typography>
            <Typography>As gendata is a specific data type, each packet is visible in the GPS Log in Admin Console:</Typography>
            <Typography><img src="/assets/Gendata_360021301952.jpeg" alt="2019-02-14_14-36-54.jpg" /></Typography>
            <Typography>It is possible to click the info link to examine a single gendata packet. For more detailed investigation, the <Link href="https://support.zonarsystems.net/hc/en-us/articles/360020914652">Gendata Extractor</Link> tool exists to search and display the contents of gendata packets more easily.</Typography>
            <Typography>Each gendata packet contains a label identifying what sort of data it is as well as an arbitrary number of data fields. The fields can be cross-referenced against documentation to determine what data is represented.</Typography>
            <Typography>All gendata packets have a number of data fields, or strings, the precise number of which depends on the specific label. The first several data strings typically contain metadata about the packet, for example:</Typography>
            <List>
                <ListItem>Packet Version</ListItem>
                <ListItem>Timestamp</ListItem>
                <ListItem>Longitude and Latitude</ListItem>
            </List>
            <Typography>The exact number of data strings and the data they contain are specified in reference pages kept on Confluence.</Typography>
            <Typography variant="h2" id="01H7TKCZV6DWA0AEG395R8442W">Reference Pages</Typography>
            <Typography>Reference pages are available on Confluencewhere they can be accessed and updated by Engineering as needed. These pages provide detailed data on each gendata label.</Typography>
            <Typography><Link href="https://zonarsystems.atlassian.net/wiki/spaces/Specs/pages/128580878578/GenData+Labels" target="_blank" rel="noopener">GPS Gendata</Link> -This page stores information on gendata relating to the GPS unit itself:</Typography>
            <List>
                <ListItem>Phone home data</ListItem>
                <ListItem>Exception data</ListItem>
                <ListItem>Cummins data</ListItem>
                <ListItem>ELD phone home and provisioning data</ListItem>
            </List>
            <Typography><Link href="https://zonarsystems.atlassian.net/wiki/spaces/Specs/pages/128580878492/Gendata" target="_blank" rel="noopener">Databus Gendata</Link> - This page stores information on gendata relating to vehicle data:</Typography>
            <List>
                <ListItem>JBus data</ListItem>
                <ListItem>Fault code data</ListItem>
                <ListItem>Microtrip data</ListItem>
                <ListItem>Light Duty data</ListItem>
            </List>
            <Typography><Link href="https://zonarsystems.atlassian.net/wiki/spaces/Specs/pages/128580878386/Alerting+HW+Specifications#AlertingHWSpecifications-1.2GenDataAlertingLabelIDs(SeeV3GenDataformoreGenDatalocations)" target="_blank" rel="noopener">Alerting Gendata</Link> - This page stores information on gendata relating to ZAlerts.</Typography>
            <Typography><Link href="https://zonarsystems.atlassian.net/wiki/spaces/Specs/pages/128580878405/Zpass#Zpass-4.0GenData(SeeV3GenDataformoreGenDatalocations)" target="_blank" rel="noopener">Z Pass Gendata</Link> - This page stores information on gendata relating to Z Pass.</Typography>
            <Typography variant="h2" id="01H7TKCZV77KYCC9FVKAX7TCKP">Gendata Interpretation Example</Typography>
            <Typography>This section will be an in-depth comparison of a common gendata packet against the relevant section in the reference page, providing an example of how to use the references to identify and interpret the incoming data.</Typography>
            <Typography>The following gendata report will be used:</Typography>
            <Typography><img src="/assets/Gendata_360021301912.jpeg" alt="2019-02-14_14-26-32_1.jpg" /></Typography>
            <Typography><img src="/assets/Gendata_360021240171.jpeg" alt="2019-02-14_14-26-32_2.jpg" /></Typography>
            <Typography><img src="/assets/Gendata_360021301932.jpeg" alt="2019-02-14_14-26-32_3.jpg" /></Typography>
            <Typography className="note">This information is taken from the <Link href="https://support.zonarsystems.net/hc/en-us/articles/360020914652">Gendata Extractor</Link> tool; see the help file to learn more.</Typography>
            <Typography variant="h3" id="01H7TKCZV70Z55N6FH6D6GV3RZ">Label</Typography>
            <Typography>As shown, the label is GDT 59999. This label can be found in the GPS Gendata reference page, being the <Link href="https://zonarsystems.atlassian.net/wiki/spaces/Specs/pages/128580878578/GenData+Labels#GenDataLabels-2.3GPSPhoneHome" target="_blank" rel="noopener">GPS Phone Home</Link> gendata packet.</Typography>
            <Typography variant="h3" id="01H7TKCZV75EQ8SBF610BS04Y9">Version</Typography>
            <Typography>Data 1 is always the version number for the gendata packet. Data 1 for this packet is 4, so version 4 of GDT 59999 must be consulted.</Typography>
            <Typography>From here, the meaning of each field can now be derived.</Typography>
            <Table sx={{width: "auto"}} size="small">
                <TableHead>
                <TableRow>
                    <TableCell>Data Field</TableCell>
                    <TableCell>Value</TableCell>
                    <TableCell>Definition</TableCell>
                    <TableCell>Notes</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>474431968</TableCell>
                    <TableCell>Latitude</TableCell>
                    <TableCell>10e6 (add decimal 7 digits from right)</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>-1221503457</TableCell>
                    <TableCell>Longitude</TableCell>
                    <TableCell>10e6 (add decimal 7 digits from right)</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>4</TableCell>
                    <TableCell>1550178262</TableCell>
                    <TableCell>Timestamp</TableCell>
                    <TableCell></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>5</TableCell>
                    <TableCell>59497562</TableCell>
                    <TableCell>Odometer</TableCell>
                    <TableCell>In meters, divide by 1609.344 to get miles</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>6</TableCell>
                    <TableCell>EGPS-3.8.100 08/09/2018</TableCell>
                    <TableCell>Firmware</TableCell>
                    <TableCell></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>7</TableCell>
                    <TableCell>7</TableCell>
                    <TableCell>Board revision</TableCell>
                    <TableCell></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>8</TableCell>
                    <TableCell>22</TableCell>
                    <TableCell>Bootloader version</TableCell>
                    <TableCell></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>9</TableCell>
                    <TableCell>1211</TableCell>
                    <TableCell>Battery Voltage</TableCell>
                    <TableCell>10e1 (add decimal 2 digits from right)</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>10</TableCell>
                    <TableCell>13</TableCell>
                    <TableCell>CPU Temperature</TableCell>
                    <TableCell>In Celsius</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>11</TableCell>
                    <TableCell>1039066</TableCell>
                    <TableCell>CPU runtime</TableCell>
                    <TableCell>In seconds since last reset (active time)</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>12</TableCell>
                    <TableCell>739061</TableCell>
                    <TableCell>CPU idle time</TableCell>
                    <TableCell>In seconds since last reset (idle time)</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>13</TableCell>
                    <TableCell>125452</TableCell>
                    <TableCell>Available disk space</TableCell>
                    <TableCell>In kilobytes</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>14</TableCell>
                    <TableCell>23408</TableCell>
                    <TableCell>Static RAM usage</TableCell>
                    <TableCell>In bytes</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>15</TableCell>
                    <TableCell>94099</TableCell>
                    <TableCell>Peak RAM usage</TableCell>
                    <TableCell>In bytes</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>16</TableCell>
                    <TableCell>17488</TableCell>
                    <TableCell>Free RAM</TableCell>
                    <TableCell>in bytes</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>17</TableCell>
                    <TableCell>18</TableCell>
                    <TableCell>Root File Count</TableCell>
                    <TableCell></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>18</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>Unsent GPS</TableCell>
                    <TableCell></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>19</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>Unsent Gendata</TableCell>
                    <TableCell></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>20</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>Unsent Two-Way</TableCell>
                    <TableCell></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>21</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>Unsent Z Pass</TableCell>
                    <TableCell></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>22</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>Unsent ZDL</TableCell>
                    <TableCell>DTNA Only</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>23</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>Unsent ZLC</TableCell>
                    <TableCell>DTNA Only</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>24</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>Unsent ZML</TableCell>
                    <TableCell>DTNA Only</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>25</TableCell>
                    <TableCell>113</TableCell>
                    <TableCell>Max Wear Block ID</TableCell>
                    <TableCell></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>26</TableCell>
                    <TableCell>1465</TableCell>
                    <TableCell>Max Wear Count</TableCell>
                    <TableCell></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>27</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>Bad Block Count</TableCell>
                    <TableCell></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>28</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>GPS Antenna State</TableCell>
                    <TableCell>0 - Unknown<br />1 - Internal<br />2 - External<br />3 - Internal (External is shorted)</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>29</TableCell>
                    <TableCell>160</TableCell>
                    <TableCell>Databus Activity</TableCell>
                    <TableCell>Bitmask<br />0 - J1587 currently active<br />1 - J1939 currently active<br />2 - J1587 Historical - active during last trip or session<br />3 - J1939 Historical - active during last trip or session<br />4 - OBD Cable currently active<br />5 - OBD Cable Historical - active during last trip or session<br />6 - OBD Databus currently active<br />7 - OBD Databus Historical - active during last trip or session</TableCell>
                </TableRow>
                </TableBody>
            </Table>
            <Typography>From the information given, several points of data can be discerned that may be useful in troubleshooting:</Typography>
            <List>
                <ListItem>The firmware is 3.8.100 (Data 6)</ListItem>
                <ListItem>The battery voltage is 12.11V (Data 9)</ListItem>
                <ListItem>There are no pending data packets unsent (Data 18-24)</ListItem>
                <ListItem>The vehicle was not turned on at the time of the phone home, but prior to the phone home the GPS unit was connected through the Light Duty cable and receiving databus information through it (Data 29)
                    <List>
                        <ListItem>Value 160 &gt; Bitmask 1010 0000 &gt; Bits 5 and 7 active</ListItem>
                        <ListItem>Bit 5 -OBD Cable Historical - active during last trip or session</ListItem>
                        <ListItem>Bit 7 -OBD Databus Historical - active during last trip or session</ListItem>
                    </List>
                    <Typography className="note">For a more in-depth explanation of this data interpretation, see <Link href="https://support.zonarsystems.net/hc/en-us/articles/360021060971-Bitmask-Explained">Bitmask Explained</Link>.</Typography>
                </ListItem>
            </List>
            <Typography className="note">Not all information will be required to be reviewed or known for all troubleshooting efforts. This interpretation sample is to aid in knowing how to find needed information.</Typography>
        </Box>
    )
}