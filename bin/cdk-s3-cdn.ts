#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import 'source-map-support/register';
import { CdkS3CdnStack } from '../lib/cdk-s3-cdn-stack';

const S3WebsiteProps =  {
    projectName: "my-project",
    s3WebSiteDeploySource: './assert',
    websiteIndexDocuments: 'index.html',
    websiteErrorDocuments: 'index.html',
    cdnWebsiteIndexDocuments: 'index.html',
    cdnComment: 'CDN for static website application',
  }

  
const app = new cdk.App();

new CdkS3CdnStack(app, 'CdkS3CdnStack', S3WebsiteProps);