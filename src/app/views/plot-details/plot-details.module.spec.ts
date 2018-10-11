import { PlotDetailsModule } from './plot-details.module';

describe('PlotDetailsModule', () => {
  let plotDetailsModule: PlotDetailsModule;

  beforeEach(() => {
    plotDetailsModule = new PlotDetailsModule();
  });

  it('should create an instance', () => {
    expect(plotDetailsModule).toBeTruthy();
  });
});
