// Experimental database-like system built using JavaScript 

let idColumn = ['0001', '0002', '0003'];
let nameColumn = ['Nathan', 'Ranger', 'John'];

// This class simulates a database table
class PhoneNumberTable {
  constructor() {
    this.columns = {
      name: nameColumn,
      id: idColumn
    };
  }

  // Insert a new row (like SQL INSERT INTO)
  INSERT_VALUES(name, id) {
    this.columns.name.push(name);
    this.columns.id.push(id);
  }

  // Change an existing row's value (like SQL UPDATE)
  ROW_CHANGE(column, rowNumber, text) {
    const columnKeys = Object.keys(this.columns);
    const selectedColumn = this.columns[columnKeys[column]];

    if (!selectedColumn) {
      console.error(`Column ${column} does not exist.`);
      return;
    }

    if (rowNumber < 0 || rowNumber >= selectedColumn.length) {
      console.error(`Invalid row number ${rowNumber}.`);
      return;
    }

    console.log(
      `Changing ${columnKeys[column]}[${rowNumber}] from "${selectedColumn[rowNumber]}" to "${text}".`
    );
    selectedColumn[rowNumber] = text;
  }

  // View the whole "table"
  PRINT_TABLE() {
    console.table({
      id: this.columns.id,
      name: this.columns.name
    });
  }
}

// Example usage
let caller = new PhoneNumberTable();

// Insert new values
caller.INSERT_VALUES('Abu', '0004');
caller.INSERT_VALUES('Asim', '0005');

// Modify a specific cell
caller.ROW_CHANGE(0, 1, '0009'); // changes idColumn[1]
caller.ROW_CHANGE(1, 0, 'Nathan Updated'); // changes nameColumn[0]

// Print the simulated table
caller.PRINT_TABLE();
