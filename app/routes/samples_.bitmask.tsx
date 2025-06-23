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

export default function Bitmask() {
    return (
        <Box className='article samples bitmask'>
            <Typography variant="h1">Bitmask Explained</Typography>
            <Divider />
            <Typography variant="h2">Purpose</Typography>
            <Typography>Several necessary GPS parameters are labeled as type Bitmask. Decoding these without the appropriate knowledge and tools can be nearly impossible. This article will explain how to decode and encode bitmasks.</Typography>
            <Typography variant="h2">What is a Bitmask?</Typography>
            <Typography>Bitmask parameters use binary to toggle several options and settings for a specific subsystem. The binary is then translated to decimal, which is the value of the parameter. Encoding the toggles in this method permits a wide array of settings in a compact value.</Typography>
            <Typography className="note">If you are unfamiliar with binary counting, you can visit the <Link href="https://en.wikipedia.org/wiki/Binary_number#Counting_in_binary" target="_blank" rel="noopener">Wikipedia page</Link> for an overview, however it is not strictly necessary to be able to use bitmasks.</Typography>
            <Typography variant="h2">Bitmask in Parameters</Typography>
            <Box component={"img"} src="/assets/bitmask/BitmaskExplained_Bitmask_11_7sm.jpeg" alt="Bitmask_11_7sm.jpg" />
            <Typography>When viewing a parameter with the Bitmask type, the numbers in the rightmost cell do not refer to value. Instead, they signify the bit which toggles that particular setting on.</Typography>
            <Typography>Bits start on the right side of a binary number and move to the left. The first bit is 0,<strong>not</strong> 1.</Typography>
            <List>
                <ListItem>000<strong>1</strong> - bit 0, enables J1939</ListItem>
                <ListItem>00<strong>1</strong>0 - bit 1, enables wakeup on J1939</ListItem>
                <ListItem>0<strong>1</strong>00 - bit 2, enables parameter requests</ListItem>
            </List>
            <Typography>and so on. Each option we want to enable must have its corresponding bit flipped to 1. Once we have all desired bits flipped, we can then convert the resulting binary number to decimal. As shown in the above example:</Typography>
            <List>
                <ListItem>0<strong>111</strong> in binary = 7 in decimal</ListItem>
            </List>
            <Typography>Therefore, the actual value we want to send to the GPS unit to enable those specific settings is<strong>7</strong>.</Typography>
            <Typography variant="h2">Encoding/Decoding Bitmasks Using Windows Calculator</Typography>
            <Typography>As mentioned above, it is not strictly necessary to understand binary numbers to handle bitmasks. The Windows calculator has a function that will assist.</Typography>
            <Box component={"img"} src="/assets/bitmask/BitmaskExplained_Bitmask_Calc_11_7.jpeg" alt="Bitmask_Calc_11_7.jpg" />
            <Typography>Open the calculator, then click on View &gt; Programmer to expand the calculator.</Typography>
            <Typography>Ensure the Decimal radio button is selected. This controls the format in which the number is displayed in the window.</Typography>
            <Typography>Notice the rows of 0 in groups of 4. These represent the bits in the bitmask that we will either set to ON or OFF using a value of 1 or 0.</Typography>
            <Typography>Read the bits from RIGHT to LEFT - notice the bit numbers below the rows. The first 0 indicates that it is bit 0, the 15 indicates bit 15, etc.</Typography>
            <Typography>In the parameter table shown above, we know we want to enable the first 3 bits (J1939 Enable, Wakeup, Parameter Requests Enable) but we want to leave the 4th bit (Fault Monitor) disabled - remember we start counting the bits at 0.</Typography>
            <Typography>Since we want to enable the first 3 bits in the bitmask above, we click on the first three 0 bits in the bitmask row, leaving the 4th bit disabled. For every bit we click, the calculator displays the decimal value that corresponds to those bits we have turned ON. Once we get all 3 of the first bits enabled, the decimal value of 7 is shown.</Typography>
            <Typography>Using the parameter 11 with the decimal value 7 will result in the GPS unit changing behavior so that it wakes up when receiving data over the J1939 protocol, however it will not report any faults.</Typography>
            <Typography>Should we later decide we want the GPS unit to start reporting the fault data again, we can turn that 4th bit back on. To find the decimal value to use, simply click the 4th bit to set it to ON (the 1 value) and the decimal display will return the value of 15.</Typography>
            <Typography>You can also plug in the reverse - type in a value of 7 using the number pad, and the bit numbers will populate 1s to indicate the binary bits that will be set to ON.</Typography>
            <Typography variant="h3"><strong>Windows 10</strong></Typography>
            <Typography>The Windows 10 calculator offers a similar function but looks slightly different.</Typography>
            <Box component={"img"} src="/assets/bitmask/BitmaskExplained_Win10Calc.png" alt="Win10Calc.PNG" />
            <Typography>If you wish to click each bit to toggle on or off, be sure the icon second from the left is selected, as shown above.</Typography>
            <Typography>If you wish to enter the decimal value to retrieve the bits, click the icon furthest to the left first, type in the decimal number, then click the icon second from the left to see the bits.</Typography>
            <Typography variant="h2">Bitmask Definition</Typography>
            <Table sx={{width: "auto"}} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography><strong>Bit</strong></Typography>
                        </TableCell>
                        <TableCell>
                            <Typography><strong>Description</strong></Typography>
                        </TableCell>
                        <TableCell colSpan={1}><strong>Used By</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Typography><strong>0</strong></Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>Input 1 state</Typography>
                        </TableCell>
                        <TableCell colSpan={1}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography><strong>1</strong></Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>Input 2 state</Typography>
                        </TableCell>
                        <TableCell colSpan={1}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography><strong>2</strong></Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>Input 3 state</Typography>
                        </TableCell>
                        <TableCell colSpan={1}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography><strong>3</strong></Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>Input 4 state</Typography>
                        </TableCell>
                        <TableCell colSpan={1}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography><strong>4</strong></Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>Input 5 state</Typography>
                        </TableCell>
                        <TableCell colSpan={1}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography><strong>5</strong></Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>Input 1 state change</Typography>
                        </TableCell>
                        <TableCell colSpan={1}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography><strong>6</strong></Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>Input 2 state change</Typography>
                        </TableCell>
                        <TableCell colSpan={1}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography><strong>7</strong></Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>Input 3 state change</Typography>
                        </TableCell>
                        <TableCell colSpan={1}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography><strong>8</strong></Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>Input 4 state change</Typography>
                        </TableCell>
                        <TableCell colSpan={1}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography><strong>9</strong></Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>Input 5 state change</Typography>
                        </TableCell>
                        <TableCell colSpan={1}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography><strong>10</strong></Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>Motion start/stop</Typography>
                        </TableCell>
                        <TableCell colSpan={1}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography><strong>11</strong></Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>Panic button</Typography>
                        </TableCell>
                        <TableCell colSpan={1}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography><strong>12</strong></Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>Not used by V3 or V4 (Was Geofence / Suspicious log point flag)</Typography>
                        </TableCell>
                        <TableCell colSpan={1}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography><strong>13</strong></Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>PowerOn bit (1 = ON, 0 = OFF)</Typography>
                        </TableCell>
                        <TableCell colSpan={1}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography><strong>14</strong></Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>Cold start bit (set only if the devices power is reset)</Typography>
                        </TableCell>
                        <TableCell colSpan={1}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography><strong>15</strong></Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>J3 bit (indicates odometer and velocity source was J3)</Typography>
                        </TableCell>
                        <TableCell colSpan={1}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography></Typography>
                        </TableCell>
                        <TableCell>
                            <Typography><span><strong>Post Version 3 additional status bit definitions.</strong></span></Typography>
                        </TableCell>
                        <TableCell colSpan={1}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography><strong>16</strong></Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>Accel/Decel Source bit (0 = J3 if bit 15 is also set, otherwise GPS. 1 = Accelerometer )</Typography>
                        </TableCell>
                        <TableCell colSpan={1}>6, 7</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography><strong>17</strong></Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>Accel/Decel Reason bit (Accel or Decel was breached and is part of the reason for the log point)</Typography>
                        </TableCell>
                        <TableCell colSpan={1}>6, 7</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography><strong>18</strong></Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>Cruise Control bit (indicates the current cruise control state)</Typography>
                        </TableCell>
                        <TableCell colSpan={1}>6, 7</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography><strong>19</strong></Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>Fuel Change bit (indicates a change in the fuel value is part of the reason for the log point)</Typography>
                        </TableCell>
                        <TableCell colSpan={1}>6, 7</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography><strong>20</strong></Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>Manual Fan Switch bit (0 = Off/Unavailable, 1 = Manual Fan Switch On)</Typography>
                        </TableCell>
                        <TableCell colSpan={1}>7</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={1}><strong>21</strong></TableCell>
                        <TableCell colSpan={1}>After-treatment Active Regeneration Status (0 = Off, 1 = Active Regeneration)</TableCell>
                        <TableCell colSpan={1}>7</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={1}><strong>22</strong></TableCell>
                        <TableCell colSpan={1}>After-treatment Active Regeneration Forced Status (0 = Forced Off, 1 = Forced On)</TableCell>
                        <TableCell colSpan={1}>7</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={1}><strong>23</strong></TableCell>
                        <TableCell colSpan={1}>After-treatment Active Regeneration Inhibited Status (0 = Not Inhibited, 1 = Inhibited)</TableCell>
                        <TableCell colSpan={1}>7</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={1}></TableCell>
                        <TableCell colSpan={1}><span><strong>Post Version 7 additional status bit definitions.</strong></span></TableCell>
                        <TableCell colSpan={1}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={1}><strong>24</strong></TableCell>
                        <TableCell colSpan={1}></TableCell>
                        <TableCell colSpan={1}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={1}><strong>25</strong></TableCell>
                        <TableCell colSpan={1}></TableCell>
                        <TableCell colSpan={1}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={1}><strong>26</strong></TableCell>
                        <TableCell colSpan={1}></TableCell>
                        <TableCell colSpan={1}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={1}><strong>27</strong></TableCell>
                        <TableCell colSpan={1}></TableCell>
                        <TableCell colSpan={1}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={1}><strong>28</strong></TableCell>
                        <TableCell colSpan={1}></TableCell>
                        <TableCell colSpan={1}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={1}><strong>29</strong></TableCell>
                        <TableCell colSpan={1}></TableCell>
                        <TableCell colSpan={1}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={1}><strong>30</strong></TableCell>
                        <TableCell colSpan={1}></TableCell>
                        <TableCell colSpan={1}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={1}><strong>31</strong></TableCell>
                        <TableCell colSpan={1}></TableCell>
                        <TableCell colSpan={1}></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Typography className="note">The additional 8 bits used in packet versions "4" and "5" have not been assigned yet.</Typography>
        </Box>
    )
}