# Hibernate Annotations
- labelling we use in our classes to help Hibernate set up + organize our db  

| Annotation | Purpose |
|-|-|
| @Entity | Labels class as an entity, requiring a no-arg constructor |
| @Table | Labels class as a table, providing extra features to adjust table |
| @Id | Placed above private var to label as the PK |
| @GeneratedValue | Determines how the PK is generated |
| @Column | Specify details about the var that will be a column |
| @Basic | Label var as not a column |
| @JoinColumn | Label var as a FK |
| @NamedQuery | Declaring 1 named query |
| @NamedQueries | Creating a container for 1+ named queries |
| @OneToOne | Indicates table will have a FK that points to the PK of another |
| @OneToMany | Creates a join table w/ the PK of both tables as columns |
| @ManyToOne | Indicates table will have a FK that points to the PK of another |
| @ManyToMany | Creates a join table w/ the PK of both tables as columns |  
