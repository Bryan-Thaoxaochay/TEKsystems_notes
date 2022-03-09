# Java NIO (New I/O)
- a new way of working w/ input + output  

Purpose
- allows for higher speed of input + output
- solves some issues related to original IO streams  

Issues w/ Original Java IO
- Streams can only read or write at a tome
- Data cannot move back + forth within a stream  

Data Flow w/ NIO
- For writing: buffer -> channel
- For reading: channel -> buffer  

## Channel Types
- *FileChannel*
- DatagramChannel
- SocketChannel
- ServerSocketChannel  

## Buffer Types
- CharBuffer
- Byte, Short, Int, Long, Float, Double
  - *buffer for all primitives except boolean*  

## Channel + Buffer Syntax
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
1. Import necessary packages
2. Create a file stream to the file
3. Create a channel from that file
4. Create a buffer w/ a given size
5. Read or write things from the channel  
