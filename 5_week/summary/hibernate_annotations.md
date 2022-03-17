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

