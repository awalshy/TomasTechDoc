---
sidebar_position: 6
---

# Build and Deploy

### Create new version

#### Branching

First of all, move your code to a branch. Check the git documentation `git checkout -b <branch-name>`

> **All the code pushed not on a branch will be removed**

#### Merge Requeset

Before pushing, check if the application works - builds, does not crash -.
The push your code `git push -u origin <branch-name>` and go onto GitLab. Create a Merge Request for us to review your work. 

> **All code merged without passing through a merge request will be removed**

### Build

To build the application for android, run `flutter build apk`. Flutter will build an apk file.

### Deploy

To deploy to the play store, you need to login onto the Google Play Console.

#### Create an Open Testing release

In the release tab, go to Testing->Open testing.
Create a new release. Upload the APK, then fill the release name and the description in the desired languages.
Google will check the release. Once done, verify the production build of the application.

#### Promote to production

Once verified, you can go to the Open Testing page again, then click on the promote release button, then production, to promote the release to production.
Google will check the app again, and once done, will promote directly to production, making the app available for all regions selected.