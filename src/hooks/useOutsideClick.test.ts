import { renderHook, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useOutsideClick } from "./useOutsideClick";

describe("useOutsideClick", () => {
  it("fires callback on click outside the ref element", () => {
    const handler = vi.fn();
    const { result } = renderHook(() => useOutsideClick(handler));
    
    // Create a mock element and assign it to the ref
    const element = document.createElement("div");
    result.current.current = element as any;
    
    // Fire click on document body
    fireEvent.mouseDown(document.body);
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it("does not fire callback on click inside the ref element", () => {
    const handler = vi.fn();
    const { result } = renderHook(() => useOutsideClick(handler));
    
    const element = document.createElement("div");
    result.current.current = element as any;
    
    // Fire click on the element itself
    fireEvent.mouseDown(element);
    expect(handler).not.toHaveBeenCalled();
  });

  it("does not fire when enabled is false", () => {
    const handler = vi.fn();
    const { result } = renderHook(() => useOutsideClick(handler, false));
    
    const element = document.createElement("div");
    result.current.current = element as any;
    
    fireEvent.mouseDown(document.body);
    expect(handler).not.toHaveBeenCalled();
  });

  it("removes listener on unmount", () => {
    const handler = vi.fn();
    const { result, unmount } = renderHook(() => useOutsideClick(handler));
    
    const element = document.createElement("div");
    result.current.current = element as any;
    
    unmount();
    
    fireEvent.mouseDown(document.body);
    expect(handler).not.toHaveBeenCalled();
  });
});
