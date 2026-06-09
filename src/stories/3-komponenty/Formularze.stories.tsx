import * as React from "react";
import type { Story } from "@ladle/react";
import { CopyChip } from "../_helpers/CopyChip";
import { Checkbox } from "@ark-ui/react/checkbox";
import { RadioGroup } from "@ark-ui/react/radio-group";
import { Switch } from "@ark-ui/react/switch";
import { Select, createListCollection } from "@ark-ui/react/select";
import { ToggleGroup } from "@ark-ui/react/toggle-group";
import { Portal } from "@ark-ui/react/portal";
import "./ark-brand.css";

/* ───── Checkbox ───── */

const CheckboxDemo: Story = () => (
  <div className="se-story-col">
    <div className="se-story-row">
      <CopyChip kind="component">Checkbox</CopyChip>
      <CopyChip kind="class">.se-checkbox</CopyChip>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {["Pokazuj DLC Required", "Pokazuj Work in Progress", "Tylko nowe w 1.1"].map(
        (label) => (
          <Checkbox.Root key={label} className="se-checkbox" defaultChecked={label.includes("DLC")}>
            <Checkbox.Control className="se-checkbox__control">
              <Checkbox.Indicator className="se-checkbox__indicator">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </Checkbox.Indicator>
            </Checkbox.Control>
            <Checkbox.Label className="se-checkbox__label">{label}</Checkbox.Label>
            <Checkbox.HiddenInput />
          </Checkbox.Root>
        )
      )}
    </div>
  </div>
);
CheckboxDemo.storyName = "Checkbox";

/* ───── Radio Group ───── */

const RadioDemo: Story = () => {
  const frakcje = ["Slowianskie", "Nordyckie", "Stepowe", "Bizantyjskie"];
  return (
    <div className="se-story-col">
      <div className="se-story-row">
        <CopyChip kind="component">RadioGroup</CopyChip>
        <CopyChip kind="class">.se-radio</CopyChip>
      </div>
      <RadioGroup.Root className="se-radio" defaultValue="Slowianskie">
        <RadioGroup.Label className="se-radio__label">Frakcja</RadioGroup.Label>
        {frakcje.map((f) => (
          <RadioGroup.Item className="se-radio__item" key={f} value={f}>
            <RadioGroup.ItemControl className="se-radio__item-control" />
            <RadioGroup.ItemText className="se-radio__item-text">{f}</RadioGroup.ItemText>
            <RadioGroup.ItemHiddenInput />
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </div>
  );
};
RadioDemo.storyName = "Radio Group";

/* ───── Switch ───── */

const SwitchDemo: Story = () => (
  <div className="se-story-col">
    <div className="se-story-row">
      <CopyChip kind="component">Switch</CopyChip>
      <CopyChip kind="class">.se-switch</CopyChip>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Switch.Root className="se-switch" defaultChecked>
        <Switch.Control className="se-switch__control">
          <Switch.Thumb className="se-switch__thumb" />
        </Switch.Control>
        <Switch.Label className="se-switch__label">Tryb ciemny</Switch.Label>
        <Switch.HiddenInput />
      </Switch.Root>
      <Switch.Root className="se-switch">
        <Switch.Control className="se-switch__control">
          <Switch.Thumb className="se-switch__thumb" />
        </Switch.Control>
        <Switch.Label className="se-switch__label">Pokazuj spoilery</Switch.Label>
        <Switch.HiddenInput />
      </Switch.Root>
    </div>
  </div>
);
SwitchDemo.storyName = "Switch";

/* ───── Select ───── */

const kultury = createListCollection({
  items: [
    { label: "Krywicze", value: "krywicze" },
    { label: "Polanie kijowscy", value: "polanie" },
    { label: "Drewlanie", value: "drewlanie" },
    { label: "Wolynianie", value: "wolynianie" },
    { label: "Serbowie luzyccy", value: "serbowie" },
    { label: "Pomorzanie", value: "pomorzanie" },
  ],
});

const SelectDemo: Story = () => (
  <div className="se-story-col">
    <div className="se-story-row">
      <CopyChip kind="component">Select</CopyChip>
      <CopyChip kind="class">.se-select</CopyChip>
    </div>
    <Select.Root className="se-select" collection={kultury}>
      <Select.Label className="se-select__label">Kultura</Select.Label>
      <Select.Control className="se-select__control">
        <Select.Trigger className="se-select__trigger">
          <Select.ValueText className="se-select__value-text" placeholder="Wybierz kulture..." />
          <div className="se-select__indicators">
            <Select.Indicator className="se-select__indicator">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>
            </Select.Indicator>
          </div>
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content className="se-select__content">
            <Select.ItemGroup className="se-select__item-group">
              <Select.ItemGroupLabel className="se-select__item-group-label">
                Kultury wschodnioslowianskie
              </Select.ItemGroupLabel>
              {kultury.items.map((item) => (
                <Select.Item className="se-select__item" key={item.value} item={item}>
                  <Select.ItemText className="se-select__item-text">
                    {item.label}
                  </Select.ItemText>
                  <Select.ItemIndicator className="se-select__item-indicator">
                    &#10003;
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Portal>
      <Select.HiddenSelect />
    </Select.Root>
  </div>
);
SelectDemo.storyName = "Select";

/* ───── Toggle Group ───── */

const ToggleGroupDemo: Story = () => (
  <div className="se-story-col">
    <div className="se-story-row">
      <CopyChip kind="component">ToggleGroup</CopyChip>
      <CopyChip kind="class">.se-toggle-group</CopyChip>
    </div>
    <div className="se-story-section">
      <span className="se-story-label">Widok listy</span>
      <ToggleGroup.Root defaultValue={["grid"]} className="se-toggle-group">
        <ToggleGroup.Item value="list" className="se-toggle-group__item" aria-label="Lista">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="grid" className="se-toggle-group__item" aria-label="Siatka">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="kanban" className="se-toggle-group__item" aria-label="Kanban">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="4" y="3" width="4" height="18" rx="1"/><rect x="10" y="3" width="4" height="12" rx="1"/><rect x="16" y="3" width="4" height="15" rx="1"/></svg>
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
  </div>
);
ToggleGroupDemo.storyName = "Toggle Group";

export { CheckboxDemo, RadioDemo, SwitchDemo, SelectDemo, ToggleGroupDemo };
export default { title: "Design System / Komponenty / Formularze" };
