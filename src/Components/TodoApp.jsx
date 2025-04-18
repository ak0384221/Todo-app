import Input from "../Micro-components/input";
import Output from "../Micro-components/output";
import Heading from "../Micro-components/heading";
import AppStoreProvider from "../Store/AppStore";

export default function TodoApp() {
  return (
    <>
      <AppStoreProvider>
        <div className="todoapp  w-4/5 mx-auto min-h-[70vh] p-2  my-15 shadow-md">
          <Heading />
          <Input />
          <Output />
        </div>
      </AppStoreProvider>
    </>
  );
}
