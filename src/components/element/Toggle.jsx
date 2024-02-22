import { Switch } from "@headlessui/react";

function Toggle({ handle, value }) {
  return (
    <Switch
      checked={value}
      onChange={handle}
      className={`${
        value ? " bg-theme100" : "bg-background_body"
      } relative inline-flex h-6 w-11 items-center rounded-full border border-color_border_500`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          value ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition border`}
      />
    </Switch>
  );
}

export default Toggle;
