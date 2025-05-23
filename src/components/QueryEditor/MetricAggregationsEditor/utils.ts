import { SelectableValue } from '@grafana/data';
import { Flavor, LuceneQueryType, MetricsConfiguration } from '../../../types';
import {
  isMetricAggregationWithField,
  isPipelineAggregationWithMultipleBucketPaths,
  MetricAggregation,
  PipelineMetricAggregationType,
} from './aggregations';
import { defaultPipelineVariable } from './SettingsEditor/BucketScriptSettingsEditor/utils';

export const metricAggregationConfig: MetricsConfiguration = {
  count: {
    label: 'Count',
    impliedLuceneQueryType: LuceneQueryType.Metric,
    requiresField: false,
    isPipelineAgg: false,
    supportsMissing: false,
    supportsMultipleBucketPaths: false,
    hasSettings: false,
    hasMeta: false,
    supportsInlineScript: false,
    defaults: {},
  },
  avg: {
    label: 'Average',
    impliedLuceneQueryType: LuceneQueryType.Metric,
    requiresField: true,
    supportsInlineScript: true,
    supportsMissing: true,
    isPipelineAgg: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    hasMeta: false,
    defaults: {},
  },
  sum: {
    label: 'Sum',
    impliedLuceneQueryType: LuceneQueryType.Metric,
    requiresField: true,
    supportsInlineScript: true,
    supportsMissing: true,
    isPipelineAgg: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    hasMeta: false,
    defaults: {},
  },
  max: {
    label: 'Max',
    impliedLuceneQueryType: LuceneQueryType.Metric,
    requiresField: true,
    supportsInlineScript: true,
    supportsMissing: true,
    isPipelineAgg: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    hasMeta: false,
    defaults: {},
  },
  min: {
    label: 'Min',
    impliedLuceneQueryType: LuceneQueryType.Metric,
    requiresField: true,
    supportsInlineScript: true,
    supportsMissing: true,
    isPipelineAgg: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    hasMeta: false,
    defaults: {},
  },
  extended_stats: {
    label: 'Extended Stats',
    impliedLuceneQueryType: LuceneQueryType.Metric,
    requiresField: true,
    supportsMissing: true,
    supportsInlineScript: true,
    isPipelineAgg: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    hasMeta: true,
    defaults: {
      meta: {
        std_deviation_bounds_lower: true,
        std_deviation_bounds_upper: true,
      },
    },
  },
  percentiles: {
    label: 'Percentiles',
    impliedLuceneQueryType: LuceneQueryType.Metric,
    requiresField: true,
    supportsMissing: true,
    supportsInlineScript: true,
    isPipelineAgg: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    hasMeta: false,
    defaults: {
      settings: {
        percents: ['25', '50', '75', '95', '99'],
      },
    },
  },
  cardinality: {
    label: 'Unique Count',
    impliedLuceneQueryType: LuceneQueryType.Metric,
    requiresField: true,
    supportsMissing: true,
    isPipelineAgg: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    supportsInlineScript: false,
    hasMeta: false,
    defaults: {},
  },
  moving_avg: {
    label: 'Moving Average',
    impliedLuceneQueryType: LuceneQueryType.Metric,
    requiresField: true,
    isPipelineAgg: true,
    supportsMissing: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    supportsInlineScript: false,
    hasMeta: false,
    defaults: {
      settings: {
        model: 'simple',
        window: 5,
      },
    },
  },
  moving_fn: {
    label: 'Moving Function',
    impliedLuceneQueryType: LuceneQueryType.Metric,
    requiresField: true,
    isPipelineAgg: true,
    supportsMultipleBucketPaths: false,
    supportsInlineScript: false,
    supportsMissing: false,
    hasMeta: false,
    hasSettings: true,
    defaults: {},
    versionRange: {
      [Flavor.Elasticsearch]: '>=7.0.0',
    },
  },
  derivative: {
    label: 'Derivative',
    impliedLuceneQueryType: LuceneQueryType.Metric,
    requiresField: true,
    isPipelineAgg: true,
    supportsMissing: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    supportsInlineScript: false,
    hasMeta: false,
    defaults: {},
  },
  cumulative_sum: {
    label: 'Cumulative Sum',
    impliedLuceneQueryType: LuceneQueryType.Metric,
    requiresField: true,
    isPipelineAgg: true,
    supportsMissing: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    supportsInlineScript: false,
    hasMeta: false,
    defaults: {},
  },
  bucket_script: {
    label: 'Bucket Script',
    impliedLuceneQueryType: LuceneQueryType.Metric,
    requiresField: false,
    isPipelineAgg: true,
    supportsMissing: false,
    supportsMultipleBucketPaths: true,
    hasSettings: true,
    supportsInlineScript: false,
    hasMeta: false,
    defaults: {
      pipelineVariables: [defaultPipelineVariable()],
    },
  },
  raw_document: {
    label: 'Raw Document (legacy)',
    impliedLuceneQueryType: LuceneQueryType.RawDocument,
    requiresField: false,
    isSingleMetric: true,
    isPipelineAgg: false,
    supportsMissing: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    supportsInlineScript: false,
    hasMeta: false,
    defaults: {
      settings: {
        size: '500',
        order: 'desc',
        useTimeRange: true,
      },
    },
  },
  raw_data: {
    label: 'Raw Data',
    impliedLuceneQueryType: LuceneQueryType.RawData,
    requiresField: false,
    isSingleMetric: true,
    isPipelineAgg: false,
    supportsMissing: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    supportsInlineScript: false,
    hasMeta: false,
    defaults: {
      settings: {
        size: '500',
        order: 'desc',
        useTimeRange: true,
      },
    },
  },
  logs: {
    label: 'Logs',
    impliedLuceneQueryType: LuceneQueryType.Logs,
    isSingleMetric: true,
    hasSettings: true,
    requiresField: false,
    isPipelineAgg: false,
    supportsMissing: false,
    supportsMultipleBucketPaths: false,
    supportsInlineScript: false,
    hasMeta: false,
    defaults: {},
  },
};

interface PipelineOption {
  label: string;
  default?: string | number | boolean;
}

type PipelineOptions = {
  [K in PipelineMetricAggregationType]: PipelineOption[];
};

export const pipelineOptions: PipelineOptions = {
  moving_avg: [
    { label: 'window', default: 5 },
    { label: 'model', default: 'simple' },
    { label: 'predict' },
    { label: 'minimize', default: false },
  ],
  moving_fn: [{ label: 'window', default: 5 }, { label: 'script' }],
  derivative: [{ label: 'unit' }],
  cumulative_sum: [{ label: 'format' }],
  bucket_script: [],
};

/**
 * Given a metric `MetricA` and an array of metrics, returns all children of `MetricA`.
 * `MetricB` is considered a child of `MetricA` if `MetricA` is referenced by `MetricB` in it's `field` attribute
 * (`MetricA.id === MetricB.field`) or in it's pipeline aggregation variables (for bucket_scripts).
 * @param metric
 * @param metrics
 */
export const getChildren = (metric: MetricAggregation, metrics: MetricAggregation[]): MetricAggregation[] => {
  const children = metrics.filter((m) => {
    // TODO: Check this.
    if (isPipelineAggregationWithMultipleBucketPaths(m)) {
      return m.pipelineVariables?.some((pv) => pv.pipelineAgg === metric.id);
    }

    return isMetricAggregationWithField(m) && metric.id === m.field;
  });

  return [...children, ...children.flatMap((child) => getChildren(child, metrics))];
};

export const orderOptions: Array<SelectableValue<string>> = [
  { label: 'Descending', value: 'desc' },
  { label: 'Ascending', value: 'asc' },
];
