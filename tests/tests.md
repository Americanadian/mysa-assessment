`/*
   @brief This function loads a toaster’s settings from the database. If
   there is an error, an error will be returned along with default
   settings from the getDefaultSettings() function. If there are no
   settings, it will return the default settings from the
   getDefaultSettings() function.
   @param id - unique id of the toaster
   @param callback - the callback function takes (error, data) objects.
   */
   function readToasterSettings(isd, callback) { ...
`

### Testing Solution

#### Testcase 1: Validate Input Parameters
Check for null on both error and data.  If there is no error code for success and null is expected when no error occurs, test passes.

#### Testcase 2: DB Connectivity Test
Validate that a connection can be established to the DB.

#### Testcase 3: Check Error Has Occurred Status
Validate that an error has or has not occured.
Based on error code, provide details to user.

#### Testcase 4: Validate Default Settings
Create an array with a set of const values representing each setting as an element in the array.

Read the default settings in from a local config file.

Assert that each setting value corresponds to the ordering of the const list and that all values match that of expected.
#### Testcase 5: Validate DB Settings
Create an array with a set of const values representing each setting as an element in the array.

Read the settings from the DB.

Assert that each setting value corresponds to the ordering of the const list and that all values match that of expected.

#### Testcase 6: Validate Toaster ID
Query toaster and validate that it's ID is valid (likely MAC address)

```
require 'enzyme'

describe('testFunction', () => {
  it('has a valid ID', () => {
    const toasterSettings = //Populate the settings;
    expect(toasterSettings.ID.equals(//Correct expected ID);
  });
});
```

#### Testcase 7: Validate Settings Applied
Create a scenario where settings are applied to the toaster and execute a toasting cycle.  Repeat the test with a different arrangement of settings and validate functional behaviors coincide with expected settings.