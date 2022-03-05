# Concurrency
Purpose
- ability to have 1+ executions at the same time  

Accomplished by distribution over multiple...
- CPUs
- processors
- cores  

## Threads
Thread
- single execution in a program  

Multithreading
- 2+ executions in a program
- Purpose
  - to achieve max efficiency w/ the max usage of the CPU
  - **Increase in threads -> Decrease in time to execute program**  

**2 Ways to Create a Thread**
Implementing an Interface
```
public class MyRunnable implements Runnable {
  public void run() {
    System.out.println("Executing thread " + Thread.currentThread().getName());
  }
}

// main() method
Thread myThread = new Thread(new MyRunnable(), "myRunnable");
myThread.start();
```
1. Create a class that implements Runnable
1. Override the run() method from Runnable
1. Create an instance of the Thread class
  - 1st Arg: new instance of class that implemented Runnable
  - 2nd Arg: name of class passed as a String
1. From instance of Thread, execute start() method
  - start() executes run()  

Extending a Class
```
public class MyThread extends Thread {
  public MyThread(String name) {
    super(name);
  }

  public void run() {
    System.out.println("Executing thread " + Thread.currentThread().getName());
  }
}

// main() method
MyThread myThread = new MyThread("myThread");
myThread.start();
```
1. Create class that extends Thread
1. Create constructor
  - 1 param: "name"
  - super(name);
1. Override run() method
1. Create instance of class that extends Thread
  - pass in thread name as an arg
1. From instance above, execute start()
  - start() executes run()
