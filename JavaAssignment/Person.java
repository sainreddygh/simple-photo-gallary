import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.List;

public class Person {
	String ssn;
	Date dateOfBirth;
	String firstName;
	String lastName;
	Double heightIn;
	Double weightLb;
	
	public Person(String ssn, Date dob, String fName, String lName, Double height, Double weight) {
		this.ssn= ssn;
		this.dateOfBirth = dob;
		this.firstName=fName;
		this.lastName=lName;
		this.heightIn=height;
		this.weightLb=weight;
	}

	public String getSsn() {
		return ssn;
	}

	public void setSsn(String ssn) {
		this.ssn = ssn;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Double getHeightIn() {
		return heightIn;
	}

	public void setHeightIn(Double heightIn) {
		this.heightIn = heightIn;
	}

	public Double getWeightLb() {
		return weightLb;
	}

	public void setWeightLb(Double weightLb) {
		this.weightLb = weightLb;
	}
	public static Comparator<Person> ssnAsceComparator = new Comparator<Person>() {
		public int compare(Person p1, Person p2) {
		   String ssn1 = p1.getSsn().toUpperCase();
		   String ssn2 = p2.getSsn().toUpperCase();
		   return ssn1.compareTo(ssn2);
	    }
	};

	public static Comparator<Person> ssnDescComparator = new Comparator<Person>() {
		public int compare(Person p1, Person p2) {
		   String ssn1 = p1.getSsn().toUpperCase();
		   String ssn2 = p2.getSsn().toUpperCase();
		   return ssn2.compareTo(ssn1);
	    }
	};

	public static Comparator<Person> dobAsceComparator = new Comparator<Person>() {
		public int compare(Person p1, Person p2) {
		   Date date1 = p1.getDateOfBirth();
		   Date date2 = p2.getDateOfBirth();
		   return date1.compareTo(date2);
	    }
	};

	public static Comparator<Person> dobDsceComparator = new Comparator<Person>() {
		public int compare(Person p1, Person p2) {
		   Date date1 = p1.getDateOfBirth();
		   Date date2 = p2.getDateOfBirth();
		   return date2.compareTo(date1);
	    }
	};
	public static Comparator<Person> fNameAsceComparator = new Comparator<Person>() {
		public int compare(Person p1, Person p2) {
		   String fn1 = p1.getFirstName().toUpperCase();
		   String fn2 = p2.getFirstName().toUpperCase();
		   return fn1.compareTo(fn2);
	    }
	};

	public static Comparator<Person> fNameDescComparator = new Comparator<Person>() {
		public int compare(Person p1, Person p2) {
		   String fn1 = p1.getFirstName().toUpperCase();
		   String fn2 = p2.getFirstName().toUpperCase();

		   return fn2.compareTo(fn1);
	    }
	};
	public static Comparator<Person> lNameAsceComparator = new Comparator<Person>() {
		public int compare(Person p1, Person p2) {
		   String ln1 = p1.getLastName().toUpperCase();
		   String ln2 = p2.getLastName().toUpperCase();
		   return ln1.compareTo(ln2);
	    }
	};
	public static Comparator<Person> lNameDescComparator = new Comparator<Person>() {
		public int compare(Person p1, Person p2) {
		   String ln1 = p1.getLastName().toUpperCase();
		   String ln2 = p2.getLastName().toUpperCase();
		   return ln2.compareTo(ln1);
	    }
	};
	public static Comparator<Person> heightAsceComparator = new Comparator<Person>() {
		public int compare(Person p1, Person p2) {
		   Double height1 = p1.getHeightIn();
		   Double height2 = p2.getHeightIn();
		   return height1.compareTo(height2);
	    }
	};
	public static Comparator<Person> heightDsceComparator = new Comparator<Person>() {
		public int compare(Person p1, Person p2) {
		   Double height1 = p1.getHeightIn();
		   Double height2 = p2.getHeightIn();
		   return height2.compareTo(height1);
	    }
	};

	public static Comparator<Person> weightAsceComparator = new Comparator<Person>() {
		public int compare(Person p1, Person p2) {
		   Double weight1 = p1.getWeightLb();
		   Double weight2 = p2.getWeightLb();
		   return weight1.compareTo(weight2);
	    }
	};

	public static Comparator<Person> weightDsceComparator = new Comparator<Person>() {
		public int compare(Person p1, Person p2) {
		   Double weight1 = p1.getWeightLb();
		   Double weight2 = p2.getWeightLb();
		   return weight2.compareTo(weight1);
	    }
	};
	
	public static List<Person> sort(List<Person> people, String sortingField, Boolean ascending){
		if(sortingField.equals("SSN")) {
			if(ascending) {
				Collections.sort(people, Person.ssnAsceComparator);
			}else {
				Collections.sort(people, Person.ssnDescComparator);
			}
		}else if(sortingField.equals("DOB")) {
			if(ascending) {
				Collections.sort(people, Person.dobAsceComparator);
			}else {
				Collections.sort(people, Person.dobDsceComparator);
			}
		}else if(sortingField.equals("firstName")) {
			if(ascending) {
				Collections.sort(people, Person.fNameAsceComparator);
			}else {
				Collections.sort(people, Person.fNameDescComparator);
			}
		}else if(sortingField.equals("lastName")) {
			if(ascending) {
				Collections.sort(people, Person.lNameAsceComparator);
			}else {
				Collections.sort(people, Person.lNameDescComparator);
			}
		}else if(sortingField.equals("height")) {
			if(ascending) {
				Collections.sort(people, Person.heightAsceComparator);
			}else {
				Collections.sort(people, Person.heightDsceComparator);
			}
		}else if(sortingField.equals("weight")) {
			if(ascending) {
				Collections.sort(people, Person.weightAsceComparator);
			}else {
				Collections.sort(people, Person.weightDsceComparator);
			}
		}
		return people;
	}
}
