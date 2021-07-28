//BEFORE USING THE FOLLOWING CODE SNIPPETS MAKE SURE YOU HAVE
//PROPERLY INITIALIZED A LOCAL IPFS GATEAWAY NODE 

const { create, globSource } = require('ipfs-http-client');

//create a client
const ipfs = create('http://localhost:5001');

// function to add a file/folder from the locasl machine to the ipfs
const addFile = async (req) => {
  const filesAdded = await ipfs.add(globSource(req.path, { recursive: req.recursive }))
    .then((result) => {
      console.log(result);
      console.log('Link to the file/folder through local gateaway:');
      console.log('localhost:8080/ipfs/'+result.cid.toString());
      return result;
    }).catch((error) => {
      console.error(error);
      return error;
    });
};

//example argument of a simple file to be uploaded
var sample_file_request = {
  //replace path with a valid file path from your local machine
  path: '/Some/Full/Path/To/A/file.extension',
  recursive: false
};

////example argument of a simple folder to be uploaded
var sample_folder_request = {
  //replace path with a valid folder path from your local machine
  path: '/Some/Full/Path/To/A/folder',
  recursive: true
};

//Uncomment to test the upload of a file
//addFile(sample_file_request);

//Uncomment to test the upload of a folder
//addFile(sample_folder_request);
