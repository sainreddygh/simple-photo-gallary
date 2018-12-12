//Sorting a collection of objects in java
2 Main approaches for sorting pojos

1. writing custom sorting lofic with all new methods
2. Using library sort logics(comparators);

First approach is time taking and more chances of bugs with short timelines.
Second approach can be implemented in multiple ways. One approach is by using the custom code to add library comparators (not including in the POJO.) But if it is already known that the pojo might need sorting on a specific field, its better to add the comparator classes at each field level(wherever needed)
