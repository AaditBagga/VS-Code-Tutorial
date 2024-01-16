class NewClass {
    constructor() {
      this.property1 = '';
      this.property2 = 0;
    }
  
    method1() {
      console.log(`Method1 is called`);
    }
  
    method2(value) {
      console.log(`Method2 called with value: ${value}`);
    }
  }
  
  function newFunction() {
    const instance1 = new NewClass();
    const instance2 = new NewClass();
    const instance3 = new NewClass();
  
    instance1.property1 = 'Value1';
    instance1.property2 = 42;
    instance1.method1();
  
    instance2.property1 = 'Value2';
    instance2.property2 = 123;
    instance2.method2(5);
  
    instance3.property1 = 'Value3';
    instance3.property2 = 789;
    instance3.method1();
  
  }
  
  newFunction();
  