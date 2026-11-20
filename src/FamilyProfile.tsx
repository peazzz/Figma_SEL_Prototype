import { createContext, useContext, useState, type ReactNode } from "react";

// Current prototype family profiles; replace with member API data when available.
export const familyProfiles = [
  { name: "我的家庭1", adults: ["媽媽", "爸爸"], members: ["妹妹", "哥哥"], image: "family-choice-home.png" },
  { name: "王家", adults: ["王1", "王5"], members: ["王2", "王3", "王4", "王6", "王7", "王8", "王9", "王10"], image: "family-choice-wang.png" },
];
const FamilyContext = createContext<{
  selectedFamily: string;
  setSelectedFamily: (name: string) => void;
}>({ selectedFamily: familyProfiles[0].name, setSelectedFamily: () => {} });

export function FamilyProvider({ children }: { children: ReactNode }) {
  const [selectedFamily, setSelectedFamily] = useState(familyProfiles[0].name);
  return <FamilyContext.Provider value={{ selectedFamily, setSelectedFamily }}>{children}</FamilyContext.Provider>;
}
export function useFamilyProfile() {
  const context = useContext(FamilyContext);
  return { ...context, profile: familyProfiles.find((family) => family.name === context.selectedFamily) ?? familyProfiles[0] };
}
