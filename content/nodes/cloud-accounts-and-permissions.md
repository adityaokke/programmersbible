---
id: cloud-accounts-and-permissions
title: "Cloud Accounts and Permissions: Who Can Do What"
type: concept
part: web
status: published
requires: [cloud-computing, passwords, two-step-verification]
related: [phishing-and-scams]
summary: "A cloud account checks who you are (authentication) and then what you may do (authorization), using written rules called policies; each person and program should get only the permissions it needs."
read_minutes: 6
questions:
  - what is the difference between authentication and authorization
  - what is the aws root user
  - what is aws iam
  - what is least privilege
  - what is an iam policy
  - what is an aws access key
  - what is the shared responsibility model
aliases: [authorization, permissions, permission policy, IAM, AWS IAM, Identity and Access Management, root user, AWS account root user, IAM user, IAM group, IAM user group, IAM role, least privilege, principle of least privilege, access key, secret access key, policy document, shared responsibility model]
sources:
  - title: "AWS documentation: What is IAM?"
    url: https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html
  - title: "AWS documentation: AWS account root user"
    url: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html
  - title: "AWS documentation: Root user best practices for your AWS account"
    url: https://docs.aws.amazon.com/IAM/latest/UserGuide/root-user-best-practices.html
  - title: "AWS documentation: IAM Identities"
    url: https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html
  - title: "AWS documentation: IAM roles"
    url: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html
  - title: "AWS documentation: Security best practices in IAM"
    url: https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html
  - title: "AWS documentation: Policies and permissions in AWS Identity and Access Management"
    url: https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html
  - title: "AWS documentation: IAM JSON policy elements: Effect"
    url: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_effect.html
  - title: "AWS documentation: IAM JSON policy elements: Action"
    url: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_action.html
  - title: "AWS documentation: IAM JSON policy elements: Version"
    url: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_version.html
  - title: "AWS documentation: Identify AWS resources with Amazon Resource Names (ARNs)"
    url: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html
  - title: "AWS documentation: What is Amazon S3?"
    url: https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html
  - title: "Amazon S3 API Reference: ListObjectsV2"
    url: https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html
  - title: "AWS documentation: Manage access keys for IAM users"
    url: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html
  - title: "AWS documentation: Security in IAM and AWS STS"
    url: https://docs.aws.amazon.com/IAM/latest/UserGuide/security.html
  - title: "AWS: Shared Responsibility Model"
    url: https://aws.amazon.com/compliance/shared-responsibility-model/
  - title: "AWS What's New: Announcing AWS Identity and Access Management (IAM) - Preview Beta (September 2, 2010)"
    url: https://aws.amazon.com/about-aws/whats-new/2010/09/02/announcing-aws-identity-and-access-management-iam-preview-beta/
  - title: "AWS What's New: AWS Identity and Access Management (IAM) Announces General Availability (May 3, 2011)"
    url: https://aws.amazon.com/about-aws/whats-new/2011/05/03/announcing-IAM/
  - title: "AWS documentation: Temporary security credentials in IAM"
    url: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html
  - title: "NIST CSRC Glossary: authorization"
    url: https://csrc.nist.gov/glossary/term/authorization
  - title: "NIST CSRC Glossary: least privilege"
    url: https://csrc.nist.gov/glossary/term/least_privilege
  - title: "Wikipedia: Principle of least privilege"
    url: https://en.wikipedia.org/wiki/Principle_of_least_privilege
  - title: "MDN Web Docs: JSON (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/JSON
  - title: "AWS documentation: Policy evaluation logic"
    url: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html
  - title: "AWS documentation: IAM user groups"
    url: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups.html
  - title: "NIST: About NIST"
    url: https://www.nist.gov/about-nist
author: ai
reviewed_by: ai
reviewed_at: 2026-11-28
updated: 2026-11-28
---

> **In one sentence:** A cloud account checks who you are (authentication) and then what you may do (authorization), using written rules called policies; each person and program should get only the permissions it needs.

## Why should I care?

In [[cloud-computing]] you learned that you can rent servers and storage over the internet. That needs an account, which controls things that cost money and hold data. Several people, or programs, may use one account. Should each of them be able to delete everything? No.

## Analogy

Think of a **hotel**. At the front desk, you show who you are: that is like authentication. Your key card opens your room, but not other guests' rooms: that is like your permissions. The manager's master key opens every door, like the root user you will meet below.

**Where the analogy breaks down:** you notice when a key card is gone. A cloud "key" for a program is a piece of text, and someone can copy it without you noticing.

## How it actually works

### Two questions: who are you, and what may you do?

You met **authentication** in [[two-step-verification]]: proving who you are. **Authorization** comes next. A US government glossary (from NIST, the National Institute of Standards and Technology) defines it as "the granting or denying of access rights to a user, program, or process".

This page uses Amazon Web Services (AWS) as its example. Its tool for both steps is **IAM** (Identity and Access Management). AWS says you use IAM "to control who is authenticated (signed in) and authorized (has permissions) to use resources". A **resource** is a thing in the cloud, such as stored files. A **permission** is something you may do.

### The first login: the root user

A new AWS account begins with "a single sign-in identity that has complete access to all AWS services and resources in the account": the **root user**. It signs in with the email address and password used to create the account.

AWS says: "We strongly recommend that you don't use the root user for your everyday tasks". Instead, AWS says to "create an administrative user for everyday tasks", and other identities for other people.

The root user must also use **MFA** (multi-factor authentication), which works like two-step verification. AWS says: "MFA is enforced for root users by default." AWS says you must register MFA for the root user "within 14 days of their first sign-in attempt".

### Separate identities for people and programs

An **identity** is a name that AWS can recognize and give permissions to. Besides the root user, AWS describes three kinds of IAM identity:

- An **IAM user** has "specific permissions for a single person or application". An **application** is a program.
- An **IAM user group** is "a collection of IAM users", so you can give several users the same permissions.
- An **IAM role** is "similar to an IAM user, but isn't associated with a specific person". AWS says a role "is intended to be assumable by anyone who needs it". To **assume** a role means to take it on for a while, as a person or a program.

A role gives "temporary security credentials". **Credentials** are what you use to prove who you are, such as a password. Temporary ones last "from a few minutes to several hours". After they expire, AWS "no longer recognizes them". So a copy that leaks stops working when it expires. AWS recommends roles for programs.

AWS's advice is **least-privilege permissions**: "grant only the permissions required to perform a task". A program that only reads files should not delete them.

### A policy: the written rule

Permissions are written in a **policy**. Most policies are stored as **JSON**, a text format for data. This example is copied from AWS's documentation:

```json
{
  "Version":"2012-10-17",
  "Statement": {
    "Effect": "Allow",
    "Action": "s3:ListBucket",
    "Resource": "arn:aws:s3:::amzn-s3-demo-bucket"
  }
}
```

Line by line:

- `"Version":"2012-10-17"` names the version of the policy language, not the day the policy was written. AWS calls it "the current version".
- `"Statement"` holds the rule.
- `"Effect": "Allow"` means the rule allows something. The other choice is `Deny`.
- `"Action": "s3:ListBucket"` is the thing allowed. Before the colon is a service: S3, one of AWS's storage services. It keeps files in containers called **buckets**. `ListBucket` lets you list what is in a bucket.
- `"Resource"` says which thing. The text starting with `arn:` is an **ARN** (Amazon Resource Name). An ARN names a resource precisely. This one names one bucket. `amzn-s3-demo-bucket` is AWS's example name.

Whoever has this policy may list that one bucket. AWS says: "By default, access to resources is denied."

```mermaid
flowchart TD
  accTitle: How AWS decides whether a request is allowed
  accDescr: A person or a program sends a request to AWS. First AWS checks who is asking. If that fails, the request is refused. Then AWS checks whether a policy allows this action on this resource. If yes, the action is allowed. If no policy allows it, the request is denied, because access is denied by default.
  W[A person or a program] --> R[Request: an action on a resource]
  R --> A{Who is asking?<br/>Authentication}
  A -- unknown --> N[Refused]
  A -- known --> P{Does a policy allow it?<br/>Authorization}
  P -- yes --> Y[Allowed]
  P -- no --> D[Denied by default]
```

(This is simplified. A `Deny` rule blocks the action even if another rule says `Allow`. And an owner can open some S3 files to anyone, with no sign-in. Buckets are private unless "you explicitly grant access permissions".)

### Access keys: passwords for programs

Programs need credentials too. AWS offers **access keys**: "long-term credentials for an IAM user or the AWS account root user". A key has an ID, such as AWS's example `AKIAIOSFODNN7EXAMPLE`, and a secret part. A program uses both together "to authenticate your requests". Keep the secret part like a password.

AWS warns: "**Do NOT** put access keys or credential information in your application files." If you give them to the wrong person, AWS warns, "you might give someone permanent access to your account". AWS also says not to create access keys for the root user.

### Who is responsible for what?

AWS says: "Security is a shared responsibility between AWS and you." AWS is "responsible for protecting the infrastructure that runs all of the services offered in the AWS Cloud". For services such as S3, customers are responsible for "using IAM tools to apply the appropriate permissions".

## How it came to be

**Privilege** here means a permission. Wikipedia says the original wording of least privilege is from Jerome Saltzer, in a 1974 paper: "Every program and every privileged user of the system should operate using the least amount of privilege necessary to complete the job."

On September 2, 2010, AWS announced a "Preview Beta" (a test version) of IAM. AWS said that IAM "eliminates the need to share passwords or access keys". On May 3, 2011, it announced "General Availability": the finished version.

## 🧪 Try it in your browser

You will read AWS's public documentation, with no account, on a computer or a phone.

1. Open AWS's short page [IAM JSON policy elements: Effect](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_effect.html). It may look different from this description.
2. **What you should see:** a tiny example, `"Effect":"Allow"`, and the sentence "By default, access to resources is denied."
3. Open AWS's page [IAM JSON policy elements: Action](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_action.html). Look at the examples near the top.
4. **What you should see:** actions such as `"Action": "s3:GetObject"` and `"Action": "iam:ChangePassword"`. Each starts with a service name, a colon, then the action. `iam` is the name of the IAM service. Close both tabs when you are done.

## Common misunderstandings

- **"Logging in means I can do anything in the account."** No. Logging in is authentication. Your permissions decide what you may do.
- **"MFA is optional for the root user."** No. AWS says MFA "is enforced for root users by default".

## Recap

- Authentication checks who you are. Authorization decides what you may do.
- The root user can do everything. AWS says not to use it for everyday tasks, and to protect it with MFA.
- Give each person and program only the permissions it needs, and keep access keys secret.

## Sources

- AWS documentation, What is IAM?: https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html
- AWS documentation, AWS account root user: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html
- AWS documentation, Root user best practices for your AWS account: https://docs.aws.amazon.com/IAM/latest/UserGuide/root-user-best-practices.html
- AWS documentation, IAM Identities: https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html
- AWS documentation, IAM roles: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html
- AWS documentation, Security best practices in IAM: https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html
- AWS documentation, Policies and permissions in IAM: https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html
- AWS documentation, IAM JSON policy elements: Effect: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_effect.html
- AWS documentation, IAM JSON policy elements: Action: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_action.html
- AWS documentation, IAM JSON policy elements: Version: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_version.html
- AWS documentation, Amazon Resource Names (ARNs): https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html
- AWS documentation, What is Amazon S3?: https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html
- Amazon S3 API Reference, ListObjectsV2: https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html
- AWS documentation, Manage access keys for IAM users: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html
- AWS documentation, Security in IAM and AWS STS: https://docs.aws.amazon.com/IAM/latest/UserGuide/security.html
- AWS, Shared Responsibility Model: https://aws.amazon.com/compliance/shared-responsibility-model/
- AWS What's New, Announcing IAM Preview Beta (September 2, 2010): https://aws.amazon.com/about-aws/whats-new/2010/09/02/announcing-aws-identity-and-access-management-iam-preview-beta/
- AWS What's New, IAM General Availability (May 3, 2011): https://aws.amazon.com/about-aws/whats-new/2011/05/03/announcing-IAM/
- AWS documentation, Temporary security credentials in IAM: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html
- NIST CSRC Glossary, authorization: https://csrc.nist.gov/glossary/term/authorization
- NIST CSRC Glossary, least privilege: https://csrc.nist.gov/glossary/term/least_privilege
- Wikipedia, Principle of least privilege: https://en.wikipedia.org/wiki/Principle_of_least_privilege
- MDN Web Docs, JSON (glossary): https://developer.mozilla.org/en-US/docs/Glossary/JSON
- AWS documentation, Policy evaluation logic: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html
- AWS documentation, IAM user groups: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups.html
- NIST, About NIST: https://www.nist.gov/about-nist
