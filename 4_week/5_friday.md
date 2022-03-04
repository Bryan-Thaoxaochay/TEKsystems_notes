# Week 5: Friday - Java Core Programming
## Advanced String Manipulation
- additional classes for string manipulation  

### StringBuffer
- creating a string that is mutable
- regular strings are immutable  

### StringJoiner
- creating a string, w/ each value separated by a delimiter (given as an arg)  

## Functional Interfaces
- interface w/ only 1 abstract method (Single Abstract Method - SAM)
- can also contain default + static methods
- Java 8 comes w/ pre-defined functional interfaces (i.e. Consumer, Supplier, etc)  

Purpose
- allows us to use lambda expressions to instantiate the interface instead of using the bulky anonymous class implementation

**Syntax**
```
@FunctionalInterface // sets this interface as functional

public interface FirstFunctionalInterface {
  public void firstWork(); // abstract method

  public default void secondWork() { ... } // default method

}

// Outside interface
FirstFunctionalInterface fi1 = new FirstFunctionalInterface() {
  @Override
  public void firstWork() { ... }
};
```  

### **Generic Functional Interfaces**
- methods that work w/ multiple datatypes  

Syntax
```
public interface GenericInterface<T> {
  T genericMethod();  // abstract method
}

// Outside interface
GenericInterface<Integer> nums = new GenericInterface<Integer>() {
  @Override
  public int genericMethod() { ... }
};
```

## Lambda Expressions
- anonymous function to implement Functional Interfaces  

Purpose
- provide inline implementation of a functional interface so we don't need an anonymous class  

Syntax
```
(params) -> { code }

// w/ functional interfaces
FunctionalInterface example = (s) -> { code }
```
- lambda instantiated w/ the object of the FunctionalInterface
- params
  - depend on the params of the abstract method
  - doesn't require a datatype specified
- body
  - no {} if 1 statement
  - {} if 2+ statements
- optional return type
  - if no {}, value of single statement returned
  - if 2+ statements, return needs to be specified  

## Concurrency
- ability to execute 1+ computations at the same time
- Accomplished by distributing over:
  - multiple CPUs
  - multiple processors
  - multiple cores  

### **Threads**
Thread
- path followed when executing a program
- i.e. main() thread  

Multithreading
- executing multiple threads to achieve max utilization of the CPU  

*2 Ways to Create a Thread*
1. implementing an interface
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

1. extending a class
```
public class MyThread extends Thread {

  public MyThread(String name) {
    super(name);
  }

  @Override
  public void run() {
    System.out.println("Executing thread " + Thread.currentThread().getName());
  }
}

// main() method
MyThread myThread = new MyThread("myThread");
myThread.start();

```

Process
- execution of 1+ thread
- Increase in threads -> decrease in time needed to run  

Thread Info
- id: unique id
- name: given name to refer to Thread
- priority: order of execution that JVM goes through
- state
  - NEW: thread hasn't started
  - RUNNABLE: thread currently executing
  - BLOCKED: thread waiting for a lock
  - WAITING: thread waiting for an action to finish
  - TIMED_WAITING: WAITING, but up to a specific time
  - TERMINATED: thread is done
- threadGroupName: group where Thread belongs to
  - makes managing threads easier  

