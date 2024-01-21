import { CombatPokedex } from "./combatPokedex";
import { CombatSolo } from "./combatSolo";

export const ComponentCombat = () => {
  return (
    <div className="flex h-full gap-5 flex-col w-full">
      <div className="grow">
        <CombatSolo />
      </div>
      <div className="grow">
        <CombatPokedex />
      </div>
    </div>
  );
};
