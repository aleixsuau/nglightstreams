/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface ISubscriber {
  firstName: string,
  lastName: string,
  email: string,
  ethereum: string,
  clauses: {
    one: boolean,
    two: boolean,
    three: boolean,
    four: boolean,
    five: boolean,
    six: boolean,
    seven: boolean,
    eight: boolean,
  }
}
