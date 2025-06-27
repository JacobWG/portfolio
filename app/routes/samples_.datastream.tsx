import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function DataStream() {
    return (
        <Box className="article samples datastream">
            <Typography variant="h1">Zonar Datastream Catalog</Typography>
            <Typography>This article describes the necessary requirements for accessing a Zonar datastream, the data schemas Zonar offers, and who to contact for troubleshooting support. A full catalog of data fields is also attached.</Typography>
            <List>
                <ListItem><Link href="#h_01HP078KAF1RRFDGY68HPHQTPY">Introduction</Link></ListItem>
                <ListItem><Link href="#h_01HP07Q8K8PKCQN3P3WAF19DDY">Glossary</Link></ListItem>
                <ListItem><Link href="#h_01HP078VVR3MEZQ80NQ1G07JWF">Requirements</Link></ListItem>
                <ListItem><Link href="#h_01HP0793HBVBXS0FQTQJ0S5D8R">Data Schemas</Link></ListItem>
                <ListItem><Link href="#h_01HP0828AMYPSH18WP3RCHXKCE">Dictionary</Link></ListItem>
                <ListItem><Link href="#h_01HP09272T38J2AJ6TR5D2YQTZ">Support</Link></ListItem>
            </List>
            <Typography variant="h1" id="h_01HP078KAF1RRFDGY68HPHQTPY">Introduction</Typography>
            <Typography>Zonar provides two primary methods of accessing data for use outside of Ground Traffic Control:</Typography>
            <Typography variant="h2" id="h_01HP078NRYY3GM46180E8DPG7B">API</Typography>
            <Typography>Zonar provides a REST API that allows you to make a direct request for data within a given set of parameters. For example, requesting GPS position data for asset 1234 between February 6 8:00 AM and February 7 5:00 PM.</Typography>
            <Typography>This method is easy to set up and execute, but you must ask for the data every time you need it, and you must have a minimum set of parameters to request it (for example, what data, which asset, what time).</Typography>
            <Typography>If you would prefer to use our API over a datastream, visit our <Link href="https://support.zonarsystems.net/hc/en-us/categories/360000020371-API-Portal">API Portal</Link> for the relevant documentation.</Typography>
            <Typography variant="h2" id="h_01HP078RJV2WETGSYJR97FG1YK">Datastream</Typography>
            <Typography>Zonar provides a continuous feed of data matching pre-set parameters. With this method you don't make specific calls every time you want data, but instead set up a subscription which "listens" for the desired data, which can then be fed into your third-party application. For example, you don't need to know the time in which asset 1234 reported position data; instead the position data would be sent to you automatically at the same time Zonar receives it from the asset.</Typography>
            <Typography>This method requires more initial setup and technical expertise to use, but can be much more efficient for large fleets which process large volumes of data.</Typography>
            <Typography>Zonar datastreams utilize the <Link href="https://cloud.google.com/pubsub/docs/overview" target="_blank" rel="noopener noreferrer">Google Pub/Sub service</Link>. Requested data is pushed to a topic, which a Google service account can subscribe to. From there the data can be used or forwarded however is necessary.</Typography>
            <Typography variant="h2" id="h_01HP07Q8K8PKCQN3P3WAF19DDY">Glossary</Typography>
            <Typography variant="h3" id="h_01HP07RG1AS2D2J0XE53S8AC7T">Datastream</Typography>
            <Typography>A continuous feed of Zonar data.</Typography>
            <Typography variant="h3" id="h_01HP07RJ1BWBR54476NCV4ZZ6D">Topic</Typography>
            <Typography>The "output" side. Zonar sends the datastream to a topic.</Typography>
            <Typography variant="h3" id="h_01HP07RN2RXVKTQD9CAQCBHZFR">Subscription</Typography>
            <Typography>The "intake" side. You subscribe to a topic, allowing you to see the data Zonar is sending to it.</Typography>
            <Typography variant="h3" id="h_01HP07RQPAKKD98EJ8VNRV4CPV">Data schema</Typography>
            <Typography>A set or package of data grouped by category. For example, Zonar offers a GPS data schema, a Fault Code schema, and so on. Schemas use the <Link href="https://avro.apache.org/docs/1.11.1/specification/_print/" target="_blank" rel="noopener noreferrer">Apache Avro</Link> framework.</Typography>
            <Typography variant="h3" id="h_01HP07RTXEEXN1EBDK07C6ZNB8">Data field</Typography>
            <Typography>A single element in a data schema. For example, the GPS data schema contains data fields for latitude, longitude, odometer, heading, speed, and so on.</Typography>
            <Typography variant="h1" id="h_01HP078VVR3MEZQ80NQ1G07JWF">Requirements</Typography>
            <Typography>To subscribe to a datastream, you need the following:</Typography>
            <List>
                <ListItem>An understanding of <Link href="https://cloud.google.com/pubsub/docs/subscription-overview" target="_blank" rel="noopener noreferrer">Google Pub/Sub subscriptions</Link>
                </ListItem>
                <ListItem>A <Link href="https://cloud.google.com/iam/docs/service-account-overview" target="_blank" rel="noopener noreferrer">Google service account</Link>
                </ListItem>
            </List>
            <Typography>Zonar needs to know the following:</Typography>
            <List>
                <ListItem>The account code(s) you want to receive data for</ListItem>
                <ListItem>Which data schemas you want to receive (see below for specific schemas)</ListItem>
                <ListItem>Whether you want a development stream which contains the same data as the production stream, but will be used for development purposes</ListItem>
                <ListItem>A contact to receive credentials</ListItem>
            </List>
            <Typography>Once the data topic has been created, Zonar will send the contact the following:</Typography>
            <List>
                <ListItem>The name(s) of the created Pub/Sub topics</ListItem>
                <ListItem>Google service account keys</ListItem>
            </List>
            <Typography variant="h1" id="h_01HP0793HBVBXS0FQTQJ0S5D8R">Data Schemas</Typography>
            <List>
                <ListItem>GPS Data</ListItem>
                <ListItem>ZTrak</ListItem>
                <ListItem>Electric Vehicle (EV)</ListItem>
                <ListItem>Idle Stops</ListItem>
                <ListItem>Fault Codes</ListItem>
                <ListItem>Electronic Logging Devices (ELD)</ListItem>
                <ListItem>Inspections (EVIR)</ListItem>
                <ListItem>ZFuel <Box component={"img"} className={"icon"} sx={{height: "15px", verticalAlign: "-2px", display: "inline"}} src="/assets/datastream/premium_service.png" alt="premium service"/></ListItem>
                <ListItem>Posted Speed <Box component={"img"} className={"icon"} sx={{height: "15px", verticalAlign: "-2px", display: "inline"}} src="/assets/datastream/premium_service.png" alt="premium service"/>
                </ListItem>
            </List>
            <Typography><Box component={"img"} className={"icon"} sx={{height: "15px", verticalAlign: "-2px", display: "inline"}} src="/assets/datastream/premium_service.png" alt="premium service"/> Requires service subscription.</Typography>
            <Typography variant="h1" id="h_01HP0828AMYPSH18WP3RCHXKCE">Dictionary</Typography>
            <Typography>Attached is the data dictionary in Excel format. Each worksheet is an available data schema showing the individual data fields within each.</Typography>
            <List>
                <ListItem>Field: Displays the name of the field. If the field is nested within a record, the record name is also shown.</ListItem>
                <ListItem>Type: Displays the data type of the field.
                    <List>
                        <ListItem>RECORD: A category type collating the subtypes located inside it. Has no value of its own.</ListItem>
                        <ListItem>STRING</ListItem>
                        <ListItem>INTEGER</ListItem>
                        <ListItem>FLOAT</ListItem>
                        <ListItem>BOOLEAN</ListItem>
                        <ListItem>TIMESTAMP</ListItem>
                    </List>
                </ListItem>
                <ListItem>Description: Displays the data the field represents.</ListItem>
                <ListItem>Units: Displays the units used when the field is a measurement integer.</ListItem>
                <ListItem>Example: Displays a possible value for the field.</ListItem>
            </List>
            <Typography variant="h1" id="h_01HP09272T38J2AJ6TR5D2YQTZ">Support</Typography>
            <Typography>Initial contact:</Typography>
            <Typography>Once the datastream is set up, contact for further troubleshooting:</Typography>
        </Box>
    )
}