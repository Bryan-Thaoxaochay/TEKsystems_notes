# File Class
- provides functions related to files + directories  

Main Operations - CRUD
- create file
- read file
- write file
- delete file  

## Read a File
```
import java.io.File;
import java.util.Scanner;
...

File readFile = new File("path\\to\\file.txt");

Scanner input = new Scanner(readFile);

while (input.hasNext()) {

  System.out.println(input.nextLine());

}
```
1. Import the necessary packages
1. Retrieve the file to be read: File object
1. Use scanner to read the file, passing the file as input
1. while the input has a next line of data, print out the next line of data  

## Write (Update) a File
```
import java.io.File;
import java.io.FileWriter;
...

File writeFile = new File ("path\\to\\file.txt");

FileWriter writer = new FileWriter(writeFile);

writer.write("Data to add to file");
writer.close();
```
1. Import the necessary packages
1. Retrieve the file to be written to
1. Use filewriter to write to the file, passing the file as an arg
1. Use the filewriter write() method to add data into the file
1. close the filewriter  