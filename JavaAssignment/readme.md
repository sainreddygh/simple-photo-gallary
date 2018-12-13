//Sorting a collection of objects in java.<br>
### 2 Main approaches for sorting pojos

1. writing custom sorting logic with all new methods
2. Using library sort logics(comparators);

First approach is time taking and more chances of bugs when implemented with shorter timelines.<br>
Second approach can be implemented in multiple ways. One approach is by using the custom code to add library comparators (not including in the POJO.) But if it is already known that the list of pojos would need sorting on a specific field, its better to add the comparator classes at each field level(wherever needed).
