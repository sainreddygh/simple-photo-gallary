import Person;

import java.util.ArrayList;
import java.util.Collections;
import java.util.GregorianCalendar;
import java.util.List;


public class PractiveApplication {
	public static void main(String[] args) {
		List<Person> persons = new ArrayList<Person>();
		// Adding random person objects for the custom sorting
		persons.add(new Person("ssn7", new GregorianCalendar(1990, 12, 15).getTime(), "fn2","ln3",4.1, 5.1));
		persons.add(new Person("ssn2", new GregorianCalendar(1989, 12, 15).getTime(), "fn3","ln4",5.1, 6.1));
		persons.add(new Person("ssn3", new GregorianCalendar(1991, 12, 15).getTime(), "fn1","ln5",6.1, 7.1));
		persons.add(new Person("ssn4", new GregorianCalendar(1992, 12, 15).getTime(), "fn4","ln1",7.1, 8.1));
		persons.add(new Person("ssn5", new GregorianCalendar(1993, 12, 15).getTime(), "fn5","ln2",3.1, 9.1));
		persons.add(new Person("ssn6", new GregorianCalendar(1994, 12, 15).getTime(), "fn6","ln6",8.1, 4.1));
        // Calling Person.sort method here and printing the sorted field
		for(Person p : Person.sort(persons, "lastName", false)) {
			System.out.println(p.getDateOfBirth());
		}
	}
}