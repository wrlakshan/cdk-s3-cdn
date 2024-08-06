import * as s3sw from "@wrlakshan/cdk-s3-cdn-construct";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export interface CdkS3CdnStackProp extends cdk.StackProps {
  projectName: string;
  s3WebSiteDeploySource: string;
  websiteIndexDocuments: string;
  websiteErrorDocuments: string;
  cdnWebsiteIndexDocuments: string;
  cdnComment: string;
}

export class CdkS3CdnStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: CdkS3CdnStackProp) {
    super(scope, id, props);

    const s3website = new s3sw.CdkS3CdnConstruct(this, "s3-website", {
      projectName: props.projectName,
      s3WebSiteDeploySource: props.s3WebSiteDeploySource,
      websiteIndexDocuments: props.websiteIndexDocuments,
      websiteErrorDocuments: props.websiteErrorDocuments,
      cdnWebsiteIndexDocuments: props.cdnWebsiteIndexDocuments,
      cdnComment: props.cdnComment,
    });
  }
}
