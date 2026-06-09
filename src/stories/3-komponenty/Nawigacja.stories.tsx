import * as React from "react";
import type { Story } from "@ladle/react";
import { CopyChip } from "../_helpers/CopyChip";
import { Tabs } from "@ark-ui/react/tabs";
import { Pagination } from "@ark-ui/react/pagination";
import { Menu } from "@ark-ui/react/menu";
import "./ark-brand.css";

/* ───── Tabs ───── */

const TabsDemo: Story = () => (
  <div className="se-story-col">
    <div className="se-story-row">
      <CopyChip kind="component">Tabs</CopyChip>
      <CopyChip kind="class">.se-tabs</CopyChip>
    </div>
    <Tabs.Root className="se-tabs" defaultValue="kultury">
      <Tabs.List className="se-tabs__list">
        <Tabs.Trigger className="se-tabs__trigger" value="kultury">
          Kultury
        </Tabs.Trigger>
        <Tabs.Trigger className="se-tabs__trigger" value="wiara">
          Wiara
        </Tabs.Trigger>
        <Tabs.Trigger className="se-tabs__trigger" value="walka">
          Walka Slowianczyzny
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className="se-tabs__content" value="kultury">
        Krywicze, Polanie kijowscy, Drewlanie i Wolynianie — razem tworza mozaike
        wschodnoslowianskich kultur osadzonych w dorzeczu Dniepru i Dzwiny.
      </Tabs.Content>
      <Tabs.Content className="se-tabs__content" value="wiara">
        Slowianskie bogi — Perun, Weles, Mokosz, Swarog — stoja u podstaw
        systemu wierzen zaimplementowanych w modzie Slavic Enlarged.
      </Tabs.Content>
      <Tabs.Content className="se-tabs__content" value="walka">
        Struggle Peruna to dynamiczny system rywalizacji miedzy frakcjami
        slowianskimi a ich sasiadami — nordyckimi i stepowymi.
      </Tabs.Content>
    </Tabs.Root>
  </div>
);
TabsDemo.storyName = "Tabs";

/* ───── Pagination ───── */

const PaginationDemo: Story = () => (
  <div className="se-story-col">
    <div className="se-story-row">
      <CopyChip kind="component">Pagination</CopyChip>
      <CopyChip kind="class">.se-pagination</CopyChip>
    </div>
    <Pagination.Root
      count={350}
      pageSize={10}
      siblingCount={1}
      className="se-pagination"
    >
      <div className="se-pagination__controls">
        <Pagination.PrevTrigger className="se-pagination__trigger">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </Pagination.PrevTrigger>
        <Pagination.Context>
          {(pagination) =>
            pagination.pages.map((page, index) =>
              page.type === "page" ? (
                <Pagination.Item
                  key={index}
                  {...page}
                  className="se-pagination__item"
                >
                  {page.value}
                </Pagination.Item>
              ) : (
                <Pagination.Ellipsis
                  key={index}
                  index={index}
                  className="se-pagination__ellipsis"
                >
                  &#8230;
                </Pagination.Ellipsis>
              )
            )
          }
        </Pagination.Context>
        <Pagination.NextTrigger className="se-pagination__trigger">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </Pagination.NextTrigger>
      </div>
    </Pagination.Root>
  </div>
);
PaginationDemo.storyName = "Pagination";

/* ───── Menu ───── */

const MenuDemo: Story = () => (
  <div className="se-story-col">
    <div className="se-story-row">
      <CopyChip kind="component">Menu</CopyChip>
      <CopyChip kind="class">.se-menu</CopyChip>
    </div>
    <Menu.Root>
      <Menu.Trigger className="se-menu__trigger">
        Akcje
        <Menu.Indicator>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </Menu.Indicator>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content className="se-menu__content">
          <Menu.Item className="se-menu__item" value="reforma">
            Przeprowadz Reforme
          </Menu.Item>
          <Menu.Item className="se-menu__item" value="swietosc">
            Oglos Swietosc
          </Menu.Item>
          <Menu.Separator className="se-menu__separator" />
          <Menu.Item className="se-menu__item" value="ofiara">
            Zloz Ofiare Perunowi
          </Menu.Item>
          <Menu.Item className="se-menu__item" value="sojusz">
            Zawiaz Sojusz Slowian
          </Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  </div>
);
MenuDemo.storyName = "Menu";

export { TabsDemo, PaginationDemo, MenuDemo };
export default { title: "Design System / Komponenty / Nawigacja" };
