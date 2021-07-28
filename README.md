#**IPFS Integration**

This is a simple guide of how to integrate IPFS within your Node.js app. The IPFS is a distributed storage network. More on it can be found on the link below:
[IPFS Main Page](https://ipfs.io/)

##**Prerequisites**

###**IPFS Installation**

Before we begin with the use of the IPFS the developer should install IPFS locally on the server who is running the app. The installation process varies between differrent machine OS. Additionally, there are desktop versions (with GUI included) and command-line tools. The installation process for both of them and for all the available platforms can be found in the two links below. All the links below staisfy the prerequisites needed to use the functionality presented in the `ipfs_utils.js` file.

[IPFS Desktop (GUI) Client Installation](https://docs.ipfs.io/install/ipfs-desktop/)

[IPFS Command Line (CLI) Client Installation](https://docs.ipfs.io/install/command-line/)


###**Local gateaway initialization**

Supposing that the developer chose to install IPFS with a `cli-client` the following terminal command will create a local gateaway on `localhost:8080` for us to use and browse the ipfs.

```
$ ipfs daemon
```

###**Node.js client library installation**

The final step of the prerequisites is to install the `ipfs-http-client` library and its dependencies on the app folder. To do so simply run the following command on your app project folder.

```
$ npm install ipfs-http-client`
```

##**Helper functions**

With all the prerequisites satisfies the developer can examine and use the functions of the `ipfs_utils.js` file to upload a file or a folder on the IPFS. Certain blocks of code can be uncommented to run examples presented within the code.

##**Viewing the files/folder you uploaded on IPFS**

There are several ways to view and download the files you uploaded on the IPFS depending on which installation you followed previsously. The three most common are:

###**Browser**

Given that there is a local gateaway running on `localhost:8080` you can view files and folders stored on the IPFS by using links like the following:

`localhost:8080/ipfs/{CID_of_the_given_file_or_folder}`

Where `CID_of_the_given_file_or_folder` is a string like this `QmXFYpb6exCYwAAgvrZRnp8F2FvEgyjYpbfTtRXfdcq9Px`.

There is also an easy to use Chrome add-on that can be found [here](https:docs.ipfs.io/install/ipfs-companion/).

###**IPFS Desktop Client**

You can view files and folders stored on the IPFS by simply inserting the `CID` of the file/folder on the given field within the app.

###**IPFS CLI Client**

You can download files and folders stored on the IPFS by running the following command on terminal.

```
$ ipfs get {CID_of_the_given_file_or_folder}
```

Where `CID_of_the_given_file_or_folder` is a string like this `QmXFYpb6exCYwAAgvrZRnp8F2FvEgyjYpbfTtRXfdcq9Px`. 
