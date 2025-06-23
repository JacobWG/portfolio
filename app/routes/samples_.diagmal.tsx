import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Accordion from '../components/Accordion';
import Alert from '@mui/material/Alert';
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

export default function DiagMal() {
    return (
        <Box className='article samples diagmal'>
            <Button variant="contained" href={'https://support.zonarsystems.net/hc/en-us/articles/360031023691-Diagnostics-Malfunctions'} target={'_blank'} sx={{mb:2}}>Link to Live Article</Button>
            <Typography variant='h1'>Diagnostics &amp; Malfunctions</Typography>
            <Divider />
            <Box id="section-intro">
                <Typography>From time to time, technical challenges with the ELD system or the asset itself could result in data discrepancies that make the driver non-compliant. Common reasons are temporary loss of connection to the telematics, a GPS connection failure, missing data from the vehicle, and so on. These occurrences are usually temporary and quickly fix themselves with no action needed from the driver or Zonar. Notifications that these temporary issues are occurring are referred to as <strong>diagnostics</strong>.</Typography>
                <Typography>If the failure is more than temporary, and is due to an issue with the asset that caused a data diagnostic in the first place, the diagnostic escalates into a <strong>malfunction</strong> after a certain period of time. At this point all drivers of the vehicle with the malfunctioning ELD are alerted with a visual indicator and are advised to start recording their hours on a paper log to be in compliance with ELD.</Typography>
                <Alert severity={'warning'}>If the malfunction does not affect logging, <u>ELD logs will remain valid</u> for the period of the malfunction.</Alert>
                <Typography>If a driver experiences a malfunction <u>and</u> the ELD no longer records hours of service accurately, proceed as follows:</Typography>
                <List component={'ol'}>
                    <ListItem>Note the malfunction of the ELD and provide written notice of the malfunction to the motor carrier within 24 hours</ListItem>
                    <ListItem>Reconstruct the record of duty status for the current 24-hour period and the previous seven consecutive days, and record the records of duty status on graph-grid paper logs that comply with § 395.8, unless the driver already possesses the records or the records are retrievable from the ELD</ListItem>
                    <ListItem>Continue to manually prepare a record of duty status in accordance with § 395.8 until the ELD is serviced and brought back into compliance (no longer in a malfunction state).</ListItem>
                </List>
                <Typography>The malfunction will remain on the device for a minimum of 24 hours before it can be rechecked and cleared. Malfunctions on an asset also provide the motor carriers the required information to inspect their assets and take care of any repairs needed to help their drivers be safe on the road.</Typography>
            </Box>
            <Accordion id="section-power" title={'Power Compliance'}>
                    <Typography>Once the engine is powered on, the ELD must be fully functional within 1 minute of receiving the power and remain powered on as long as the vehicle's engine is powered on. Once the ELD is fully functional within 1 minute, the ELD expects to receive vehicle data.</Typography>
                    <Typography variant='h3'>Diagnostic</Typography>
                    <Typography>Power Compliance diagnostics are slightly tricky, as without power the ELD cannot actually function. As a result, Zonar looks for Power Compliance diagnostics in two ways, both of which rely on a cold start event:</Typography>
                    <List>
                        <ListItem>When a Cold Start event occurs and the vehicle has been running for at least 60 seconds, the ELD will record a Power Compliance diagnostic.</ListItem>
                        <ListItem>When a Cold Start event occurs and the vehicle is not currently running, the ELD will look back to the last Engine On or Engine Off event. If the last Engine event is On, it will record the entire time from Engine On to cold start as a Power Compliance diagnostic.</ListItem>
                    </List>
                    <Alert severity={'info'}>A Cold Start event occurs when the telematics unit regains constant power after losing it for any amount of time. This differs from an Engine On event, as the telematics unit should have power even when the engine is off.</Alert>
                    <Typography variant='h3'>Malfunction</Typography>
                    <Typography>If the total time that a Power Compliance diagnostic is active on an asset exceeds 30 minutes over the last 24 hours, a Power Compliance malfunction is created. This malfunction will be cleared when the total time of the malfunction drops below 30 minutes over the last 24 hours.</Typography>
                    <Typography variant='h3'>Causes and Resolution</Typography>
                    <Typography>A Power Compliance diagnostic can only be caused by a loss of power to the ELD.</Typography>
                    <Typography>Sometimes this is an intentional loss, such as when maintenance is being performed on the vehicle, in which case the diagnostic or malfunction will clear itself normally over the next 24 hours.</Typography>
                    <Typography>If the malfunction does not clear within 72 hours, or if the driver notices an intermittent diagnostic, the cabling may be loose, frayed, or not receiving proper voltage. A mechanic will need to check the cabling to ensure the ELD is receiving constant power even when the engine is turned off.</Typography>
            </Accordion>
            <Accordion id="section-engine-sync" title={'Engine Synchronization'}>
                    <Typography>ELD compliance mandates that the vehicle's Engine Control Unit (ECU) should be monitored to capture the following data for all ELD events:</Typography>
                    <List>
                        <ListItem>Velocity (or motion)</ListItem>
                        <ListItem>RPMs (or power)</ListItem>
                        <ListItem>Odometer</ListItem>
                        <ListItem>Engine Hours</ListItem>
                    </List>
                    <Typography variant='h3'>Diagnostic</Typography>
                    <Typography>If the ELD does not receive any or all of the above values while the engine is running within 5 seconds of the ELD requesting them, an Engine Sync Data Diagnostic will be created. The diagnostic is cleared as soon as the ELD receives all values again.</Typography>
                    <Typography variant='h3'>Malfunction</Typography>
                    <Typography>When the total time a diagnostic is in effect exceeds 30 minutes over the last 24 hours, an Engine Sync Compliance malfunction is created. The malfunction is cleared when the duration of the diagnostic falls below 30 minutes over the last 24 hours.</Typography>
                    <Typography variant='h3'>Causes and Resolution</Typography>
                    <Typography>The possible causes of an engine sync diagnostic are varied. Some possibilities include:</Typography>
                    <List>
                        <ListItem>The data port on the telematics unit may not be connected.</ListItem>
                        <ListItem>The data port on the vehicle may not provide all necessary data. Some vehicles, especially newer models, may have multiple data networks which carry different kinds of information, or provide only some information to certain ports.</ListItem>
                        <ListItem>Sensor failures on the vehicle may interfere with engine data.</ListItem>
                        <ListItem>The vehicle's ECU may not be able to consistently supply the data within 5 seconds, or may not supply the data at all. This can occur more frequently on older vehicles.</ListItem>
                    </List>
                    <Typography>The existence of a single engine sync diagnostic is typically unremarkable; occasional occurrences where the ECU cannot deliver the needed data is expected. If enough diagnostic time escalates into a malfunction that persists for more than 72 hours, analysis of the ELD events and diagnostics by fleet managers and Zonar may be necessary to track down the source of the issue. A hardware check should be completed first to ensure all cabling is connected securely.</Typography>
            </Accordion>
            <Accordion id="section-position" title={'Position Compliance'}>
                    <Typography>ELD is expected to monitor the position of the vehicle in motion every 5 miles or less. All ELD records should record the location information, latitude/longitude, and distance traveled using the last position information captured by the ELD.</Typography>
                    <Typography variant='h3'>Diagnostic</Typography>
                    <Typography>If the ELD fails to capture the position within 5 miles of the vehicles movement, the ELD begins recording the lack of position but <u>does not create a diagnostic</u>.</Typography>
                    <Typography>The driver can see when the ELD is not capturing position information, as the Location field in the Duty Status screen will be blank.</Typography>
                    <Typography variant='h3'>Malfunction</Typography>
                    <Typography>If the ELD does not receive position information for more than 60 minutes total over the last 24 hours, the ELD will create a Position Compliance malfunction.</Typography>
                    <Typography>The Position Compliance malfunction is cleared when the ELD can record position information again and total time without a position falls below 60 minutes over the last 24 hours.</Typography>
                    <Typography variant='h3'>Causes and Resolution</Typography>
                    <Typography>This malfunction is nearly always caused by a failure of the GPS module in the telematics unit. This can be verified by checking the GPS light on the telematics unit (V3s and V4s will display solid green if working). If necessary, replace the telematics unit and verify that the Duty Status screen is reporting Location.</Typography>
            </Accordion>
            <Accordion id="section-data-recording" title={'Data Recording Compliance'}>
                    <Typography>ELD is expected to record and retain data and not lose any data that will make the driver logs inaccurate and incorrect.</Typography>
                    <Typography variant='h3'>Diagnostic</Typography>
                    <Typography>Data Recording does not create a diagnostic.</Typography>
                    <Typography variant='h3'>Malfunction</Typography>
                    <Typography>If any of the ELD components (tablet, telematics unit, or Zonar's database) is either corrupted or reaches its storage capacity and the ELD is unable to save, retrieve or store the records, the ELD should immediately set a Data Recording Compliance malfunction. The malfunction is immediately cleared when the ELD is again able to function normally.</Typography>
                    <Typography variant='h3'>Causes and Resolution</Typography>
                    <Typography>A Data Recording malfunction may occur due to an ELD tablet being disconnected from the telematics unit for a prolonged time. In such a case, checking the cabling and ensuring the tablet is properly communicating with the telematics unit should help resolve the issue.</Typography>
                    <Typography>If all components are communicating with each other but the malfunction persists for more than 72 hours, contact Zonar for assistance in troubleshooting.</Typography>
            </Accordion>
            <Accordion id="section-data-transfer" title={'Data Transfer Compliance'}>
                    <Typography>A driver should be able to transfer an export file to the FMCSA for retrieval by a field officer any time the driver is inspected roadside. In order to ensure that the ELD's data transfer feature is operating normally, the ELD will automatically conduct a data transfer test every 7 days.</Typography>
                    <Typography>Zonar ELD conducts a data transfer test for every driver that logs in the first time after the driver has created his first ELD events and duty status, and once every 7 days thereafter.</Typography>
                    <Typography variant='h3'>Diagnostic</Typography>
                    <Typography>If the test transfer fails, the ELD creates a Data Transfer diagnostic. Additional tests will be performed every 24 hours, rather than every 7 days, until a test succeeds. A test will also be performed under the following conditions:</Typography>
                    <List>
                        <ListItem>If a driver has been in a vehicle with a data transfer diagnostic, then logs into a new asset that is <u>not</u> in a diagnostic state, a data transfer test will be performed immediately.</ListItem>
                        <ListItem>If a driver has <u>not</u> experienced a data transfer diagnostic, but logs into an asset that <u>is</u> in a diagnostic state, a data transfer test will be performed immediately.</ListItem>
                    </List>
                    <Typography>If any data transfer test is successful, the Data Transfer diagnostic is cleared and the data transfer test is rescheduled for the 7th day forward.</Typography>
                    <Typography variant='h3'>Malfunction</Typography>
                    <Typography>If the Data Transfer test fails three (3) consecutive times, a Data Transfer Compliance malfunction is created for the asset and the ELD will continue testing every 24 hours. The malfunction is cleared when the test succeeds.</Typography>
                    <Typography variant='h3'>Causes and Resolution</Typography>
                    <Typography>The Data Transfer diagnostic may occur if the ELD does not have a cellular connection at time of testing. If this is an intermittent issue, such as the vehicle driving in remote areas, the diagnostic should clear normally.</Typography>
                    <Typography>If the malfunction persists for more than 72 hours, fleet managers should check that their asset and driver profiles are complete and accurate, as this may cause data integrity issues. If the malfunction persists, contact Zonar for further assistance.</Typography>
            </Accordion>
            <Accordion id="section-timing" title={'Timing Compliance'}>
                    <Typography>The ELD must be synchronized with Coordinated Universal Time (UTC) to ensure driving events are timestamped accurately. The FMCSA considers the ELD to be synchronized if the time is within 10 minutes of UTC. This is normally handled automatically by the ELD wireless communication.</Typography>
                    <Typography variant='h3'>Diagnostic</Typography>
                    <Typography>Timing compliance does not create a diagnostic event.</Typography>
                    <Typography variant='h3'>Malfunction</Typography>
                    <Typography>When the ELD time is desynchronized more than 10 minutes from UTC, a malfunction occurs. The malfunction is cleared when the ELD is once again synchronized.</Typography>
                    <Typography>Undocking and redocking the ELD as well as ensuring it has a wireless connection should cause the malfunction to clear.</Typography>
            </Accordion>
            <Accordion id="section-udl" title={'Unidentified Driving Records'}>
                    <Typography>When the ELD detects vehicle motion and no driver is logged into the tablet, the drive time is recorded as Unidentified Driving. The next driver to log into the ELD will be asked if that drive time is theirs, at which time they have the option to accept or reject the drive time.</Typography>
                    <Typography variant='h3'>Diagnostic</Typography>
                    <Typography>If there are more than 30 minutes of unidentified driving in the last 24 hours, the diagnostic is created.</Typography>
                    <Typography>The diagnostic clears when the unidentified drive time falls below 15 minutes for the 24-hour period and the previous 7 days.</Typography>
                    <Typography variant='h3'>Malfunction</Typography>
                    <Typography>Unidentified driving does not create a malfunction.</Typography>
            </Accordion>
            <Accordion id="section-mde" title={'Missing Data Elements'}>
                    <Typography>ELD duty status changes must have information about the vehicle at the time of change, such as odometer and location. This data is provided by the vehicle and GPS unit located on the vehicle.</Typography>
                    <Typography variant='h3'>Diagnostic</Typography>
                    <Typography>If a duty status change occurs while the ELD is not properly connected to an idling vehicle, a diagnostic is created.</Typography>
                    <Typography>The diagnostic clears the next time a duty status change occurs while properly connected to the vehicle.</Typography>
                    <Typography variant='h3'>Malfunction</Typography>
                    <Typography>Missing Data Elements does not create a malfunction.</Typography>
            </Accordion>
        </Box>
    )
}