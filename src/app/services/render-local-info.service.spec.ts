import { TestBed } from "@angular/core/testing";

import { RenderLocalInfoService } from "./render-local-info.service";

describe("RenderLocalInfoService", () => {
  let service: RenderLocalInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenderLocalInfoService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
