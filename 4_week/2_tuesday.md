# Week 4: Tuesday - Core Java Programming
## File Class
### Reading Files
FileReader
```
import java.io.FileReader;
...

FileReader fileReader = new FileReader("path\\to\\file\\to\\read.txt");

fileReader.read();

int asciiCharData;
while ((asciiCharData = fileReader.read()) != -1) {
  System.out.print(
    (char) asciiCharData
  );
}

fileReader.close();

```
- .read() returns the ASCII code for a single char or -1 at the end of the file
- in order to retrieve all the chars, we can put it into a while loop  
- exception needs to be made for "FileNotFoundException"  

FileInputStream
```
import java.io.FileInputStream;
...

FileInputStream fis = new FileInputStream("path\\to\\read\\file.txt");
int i;

while ((i = fis.read()) != -1) {
  System.out.print((char) i);
}
```

FileReader -> if data source (file) is sending chars  
FileInputStream -> if data source (file) is sending bytes  

### Writing to a File
FileWriter
```
import java.io.FileWriter;
...

FileWriter writer = new FileWriter("path\\to\\file.txt");

writer.write("String or number, but number converted to char");

writer.close();
```
- .write() accepts an int or a string. The int will be converted to it's char via ASCII  

## Java NIO (New I/O)
- using channels + buffers to work w/ input + output
- regular Java IO uses char streams + byte streams

Why?
- allows for higher speed input + output  

Issue w/ Original Java IO (Streams)
1. Streams can only read or write at a time
1. We cannot move back + forth with the data in a stream
1. Difficult working w/ buffer  

Data Flow
- For writing: buffer -> channel
- For reading: channel -> buffer  

Selectors - object containing methods to work with channels
- can work w/ 1+ channels  

Types of Channels
- DatagramChannel
- SocketChannel
- FileChannel
- ServerSocketChannel  

Types of Buffers
- CharBuffer
- Byte, Short, Int, Long, Float, DoubleBuffer
- *primitive datatypes except boolean*  

### Syntax
Channel + Buffer
```
// Import Packages
import java.nio.FileInputStream;
import java.nio.FileChannel;
...

FileInputStream file = new FileInputStream("path\\to\\file.txt");
FileChannel channel = file.getChannel(); // create channel

ByteBuffer buf = ByteBuffer.allocate(size of channel or file); // create buffer

int bytesRead = channel.read(buf); // reading the bytes from the channel
int bytesWritten = channel.write(buf); // writing bytes to the channel
```