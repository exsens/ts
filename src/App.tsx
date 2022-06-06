import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;

let num: number | null = 10;
let str: string = "str";
let arr: Array<string> = ["10", "20", "str"];
let arr1: string[] = ["arr", "arr2"];
let color: "red" | "blue";
let obj = {
  a: "a",
  b: "b",
};

type AddressType = {
  city?: string;
  country: string;
};

type UserType = {
  fn: Function;
  f1?: (mes: "string") => void;
  address: AddressType | null;
  age?: number;
  sex?: "male" | "female";
  work: boolean;
};

let object: UserType = {
  fn() {},
  f1: (str) => {
    console.log(str);
  },
  address: {
    city: "bryansk",
    country: "russia",
  },
  work: true,
  sex: "male",
  age: 25,
};

let func = (a: number, b: number) => {
  return a + b;
};
const func2 = (a: any) => {};

func(1, 2);

const initialState = {
  user: "name" as string | null,
  age: 25 as number | null,
  work: false as boolean | null,
  object: {} as AddressType | null,
  users: [] as Array<AddressType>,
};

export type InitialState = typeof initialState;
let state: InitialState = {
  age: 25,
  user: "name",
  work: true,
  object: {
    city: "br",
    country: "r",
  },
  users: [
    {
      city: "br",
      country: "r",
    },
  ],
};

const GET_USERS = "GET_USERS";

type GetUsers = {
  type: typeof GET_USERS;
  payload: number;
};

const getUsers: GetUsers = {
  type: GET_USERS,
  payload: 12,
};
