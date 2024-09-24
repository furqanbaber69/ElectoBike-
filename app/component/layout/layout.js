"use client";
import Header from "@/app/component/header/header";
import Footer from "@/app/component/footer/footer";
import { Provider } from "react-redux";
import { store } from "@/app/store/store";

export default function Layout({ children }) {
  return (
    <Provider store={store}>
      <div className="max-w-full max-h-full">
        <div className=" ">
          {/* Header stays at the top */}
          <Header />
        </div>

        {/* Main content takes available space below the header */}
        <main className="">
          {/* Add margin to space it below the header if needed */}
          {children}
        </main>
        <div className="md:h-[10%]">
          {/* Footer stays at the bottom */}
          <Footer />
        </div>
      </div>
    </Provider>
  );
}
