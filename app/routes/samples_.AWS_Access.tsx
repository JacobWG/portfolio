import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import type { TooltipProps } from '@mui/material/Tooltip';

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));

export default function AWSAccess() {
    return (
        <Box className='article sample aws_access'>
            <Typography>Task: How do I create an AWS Identity and Access Management (IAM) group with read and write access to a specific Amazon S3 bucket?</Typography>
            <Typography variant='h1' id="h.1xcqbx8z8nc0">Introduction</Typography>
            <Typography>When users are created in your account, by default they have no permissions to read or access anything in the account. You need to provide users permissions, either by assigning them directly to the user, or by placing the user into a user group with a pre-determined permission policy. Assigning the user to a group has several benefits, the largest one being the ability to edit a team&rsquo;s permissions without needing to edit the users individually.</Typography>
            <Typography>This guide describes the basic process for creating a user group with read and write access to one or more specific S3 buckets in your account. Users who need to see those buckets can then be added to the group at any time for immediate access.</Typography>
            <Typography>By the end of this guide, you will be able to:</Typography>
            <List>
                <ListItem>
                    Create a user group
                </ListItem>
                <ListItem>
                    Create a custom permissions policy for a user group
                </ListItem>
                <ListItem>
                    Assign permissions to the policy
                </ListItem>
            </List>
            <Typography variant='h1' id="h.gh0odp39kbhb">Requirements</Typography>
            <Typography>To complete this guide, you need:</Typography>
            <List>
                <ListItem>An AWS account and root user access (or appropriate high-level permissions)</ListItem>
                <ListItem>One or more S3 buckets that you need to control access to. It&rsquo;s recommended to have the Amazon Resource Name (ARN) for each bucket at hand.</ListItem>
                <ListItem>Users to be included in the user group to receive access. This is optional, as you can add users any time during or after group creation and during or after user creation.</ListItem>
            </List>
            <Typography variant='h1' id="h.kv5e0jx9ncfq">Procedure</Typography>
            <Typography variant='h2' id="h.eazoypebhl3m">Create the User Group</Typography>
            <List component="ol" start={1}>
                <ListItem>Open the Identity and Access Management (IAM) console.
                    <HtmlTooltip
                        title={
                        <React.Fragment>
                            <Typography variant={'caption'}>This is separate from the IAM Identity Center, which is not covered in this guide.</Typography>
                        </React.Fragment>
                    }>
                        <Typography component={'span'}><sup>[1]</sup></Typography>
                    </HtmlTooltip>
                </ListItem>
                <ListItem>Select User groups&nbsp;in the drawer on the left hand side to open the User groups&nbsp;page.</ListItem>
                <List>
                    <ListItem>If the drawer is not visible, click the hamburger icon to expand it.<br /><img alt="" src="/assets/image4.png" title="" /></ListItem>
                </List>
                <ListItem>Click Create Group&nbsp;in the upper right.<br /><img alt="" src="/assets/image5.png" title="" /></ListItem>
            </List>
            <Typography variant='h3' id="h.sabevgivlqxa">Name the group</Typography>
            <List component="ol" start={4}>
                <ListItem>Enter the group name. Choose a meaningful name so you can see at a glance what the group is used for.</ListItem>
                <List>
                    <ListItem>Use only alphanumeric and +=,.@-_&nbsp;characters. Spaces may not be used.</ListItem>
                </List>
            </List>
            <Typography variant='h3' id="h.aq9570oxs8j1">Add users to the group</Typography>
            <List component="ol" start={5}>
                <ListItem>Add any desired users to the group.</ListItem>
                <List>
                    <ListItem>This step is optional. You can always add existing users to the group later or add users to the group when you create them.</ListItem>
                </List>
                <ListItem>Skip the Attach permissions policies&nbsp;step. You will create a custom permission policy later.</ListItem>
                <ListItem>Click Create user group&nbsp;in the bottom right.</ListItem>
                <ListItem>The console should return you to the list of user groups along with a success message.<br /><img alt="" src="/assets/image1.png" title="" /></ListItem>
            </List>
            <Typography variant='h2' id="h.rhqf1qx52mu9">Specify Permissions</Typography>
            <List component="ol" start={1}>
                <ListItem>From the list of user groups, click the group name to open the details.</ListItem>
                <ListItem>Click Permissions.</ListItem>
                <ListItem>Click Add permissions, then select Create inline policy.<br /><img alt="" src="/assets/image6.png" title="" /></ListItem>
                <ListItem>The Specify Permissions&nbsp;page opens with several sections to fill out as detailed below.</ListItem>
            </List>
            <Typography variant='h3' id="h.vfyqutiudkpr">Policy editor</Typography>
            <List component="ol" start={5}>
                <ListItem>You can choose to use the Visual editor to build the policy or write the policy directly as a JSON object. For now, select the Visual editor if not already selected.
                    <HtmlTooltip
                        title={
                            <React.Fragment>
                                <Typography variant={'caption'}>For a tutorial on creating policy in JSON, see the user guide <Link href="https://www.google.com/url?q=https://docs.aws.amazon.com/AmazonS3/latest/userguide/walkthrough1.html&amp;sa=D&amp;source=editors&amp;ust=1749690088020687&amp;usg=AOvVaw105QjaRLFdNLQJHRjX-pHV">Controlling access to a bucket with user policies</Link>.</Typography>
                            </React.Fragment>
                        }>
                        <Typography component={'span'}><sup>[2]</sup></Typography>
                    </HtmlTooltip>
                </ListItem>
            </List>
            <Typography variant='h3' id="h.dw30hwf4dv0f">Select a service</Typography>
            <List component="ol" start={6}>
                <ListItem>In the Service dropdown, select S3. The option should be located near the top in Commonly used services. You can also type &ldquo;S3&rdquo; into the text box to filter the service list.<br /><img alt="" src="/assets/image7.png" title="" /></ListItem>
                <ListItem>Once selected, further sections specific to S3 are shown.</ListItem>
            </List>
            <Typography variant='h3' id="h.4l2v431xwpkh">Actions allowed</Typography>
            <List component="ol" start={8}>
                <ListItem>Select the following actions:</ListItem>
                <List>
                    <ListItem>List &gt; ListBucket</ListItem>
                    <List>
                        <ListItem>This allows the user group to see that the bucket exists, but does not grant access. You will identify the target bucket later.</ListItem>
                    </List>
                    <ListItem>Read &gt; GetObject</ListItem>
                    <List>
                        <ListItem>This allows the user group to access the target bucket and read the list of objects within.</ListItem>
                    </List>
                    <ListItem>Write &gt; PutObject</ListItem>
                    <List>
                        <ListItem>This allows the user group to add objects to the target bucket.</ListItem>
                    </List>
                </List>
                <ListItem>Skip Permissions management&nbsp;and Tagging. These actions are not covered in this guide.</ListItem>
            </List>
            <Typography variant='h3' id="h.1wyy6lw4e376">Resources</Typography>
            <Typography>This section identifies the buckets and/or objects allowed by this policy.</Typography>
            <List component="ol" start={10}>
                <ListItem>bucket - Since we want to restrict access to a single existing bucket, we need to add the bucket ARN. Click Add ARNs.</ListItem>
                <List component="ol" start={1}>
                    <ListItem>In Visual mode, enter the name of the bucket in Resource bucket name. The console automatically creates the necessary Resource ARN below.</ListItem>
                    <ListItem>If you want to grant access to multiple buckets, click Text. This allows you to enter multiple ARNs at once. Be sure to use ARN format (arn:aws:s3:::$bucketname) rather than the bucket name itself.</ListItem>
                    <ListItem>When finished, click Add ARNs.</ListItem>
                </List>
                <ListItem>object - Since we want to allow the user group to read or write any and all objects, but only within the specified bucket, we also need to add the bucket ARN here. Click Add ARNs.</ListItem>
                <List component="ol" start={1}>
                    <ListItem>In Visual mode, enter the name of the bucket in Resource bucket name.</ListItem>
                    <ListItem>Click Any object name. The console automatically adds /*&nbsp;after the Resource ARN to signify all objects within the bucket.</ListItem>
                    <ListItem>Click Add ARNs.</ListItem>
                </List>
                <ListItem>Your Resources section should look like this:<br /><img alt="" src="/assets/image3.png" title="" /></ListItem>
            </List>
            <Typography variant='h3' id="h.auvnw2l622hw">Request conditions</Typography>
            <List component="ol" start={13}>
                <ListItem>If you want to restrict access unless certain conditions are met, you can include these conditions here. For example, if you choose User is MFA Authenticated, a user without multi-factor authentication enabled is not permitted to access the bucket, even if they are included in the user group.</ListItem>
            </List>
            <Typography>&nbsp;</Typography>
            <List component="ol" start={14}>
                <ListItem>Once all settings are selected, click Next&nbsp;in the bottom right corner to proceed to the Review and create&nbsp;screen.</ListItem>
            </List>
            <Typography variant='h2' id="h.xz724x1x9oxv">Review and create</Typography>
            <Typography variant='h3' id="h.tql2w0ndni6w">Policy details</Typography>
            <List component="ol" start={15}>
                <ListItem>Enter the policy name. Choose a meaningful name so you can see at a glance what the policy is used for.</ListItem>
                <List>
                    <ListItem>Use only alphanumeric and +=,.@-_&nbsp;characters. Spaces may not be used.</ListItem>
                </List>
            </List>
            <Typography variant='h3' id="h.x06kfz1ybiao">Permissions defined in this policy</Typography>
            <List component="ol" start={16}>
                <ListItem>This section should reflect the S3 permissions we established on the previous screen. More permissions may be added at this time. For the purposes of this guide, skip this section.</ListItem>
            </List>
            <List component="ol" start={17}>
                <ListItem>Click Create Policy.</ListItem>
                <ListItem>The console should return you to the user group details screen along with a success message.<br /><img alt="" src="/assets/image2.png" title="" /></ListItem>
            </List>
            <Typography>Users in this group should now be able to see the bucket as well as read or add any object in that bucket.</Typography>
            <Typography>You&rsquo;re done! You can extend the actions in this guide to other aspects of managing your users in IAM:</Typography>
            <List>
                <ListItem>You can add additional permissions other than the ones listed in this guide if necessary, or remove the ones listed here.</ListItem>
                <ListItem>You can add extra policies to the user group providing different permissions for a different set of buckets, or even for Amazon services other than S3.</ListItem>
                <ListItem>You can create different user groups which have access to different buckets, and potentially different permissions for the same buckets, such as managers and team leads who need additional access.</ListItem>
                <ListItem>You can add users to this or any other relevant user group as you create them (select the Add user to group&nbsp;option when creating a user, then select the groups you want them to belong to).</ListItem>
            </List>
        </Box>
    )
}