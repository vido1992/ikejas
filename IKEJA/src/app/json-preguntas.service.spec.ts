import { TestBed } from '@angular/core/testing';

import { JsonPreguntasService } from './json-preguntas.service';

describe('JsonPreguntasService', () => {
  let service: JsonPreguntasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonPreguntasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
