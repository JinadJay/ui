import { describe, expect, it } from "vitest";

import * as exports from "../index";

describe("Public exports surface", () => {
  it("exposes all recently added and core component exports", () => {
    // Specifically requested component assertions (#771)
    expect(exports.RebalancerHistory).toBeTypeOf("function");
    expect(exports.SwapRoute).toBeTypeOf("function");
    expect(exports.AllocationInput).toBeTypeOf("function");
    expect(exports.StakingDashboard).toBeTypeOf("function");
  });

  it("exposes all public UI primitive and component exports from src/index.ts", () => {
    // UI Primitives
    expect(exports.Badge).toBeTypeOf("function");
    expect(exports.Button).toBeTypeOf("function");
    expect(exports.ButtonGroup).toBeTypeOf("function");
    expect(exports.Card).toBeTypeOf("function");
    expect(exports.CardContent).toBeTypeOf("function");
    expect(exports.CardDescription).toBeTypeOf("function");
    expect(exports.CardFooter).toBeTypeOf("function");
    expect(exports.CardHeader).toBeTypeOf("function");
    expect(exports.CardTitle).toBeTypeOf("function");
    expect(exports.InfoCell).toBeTypeOf("function");
    expect(exports.Input).toBeTypeOf("function");
    expect(exports.LabelledValue).toBeTypeOf("function");
    expect(exports.Separator).toBeTypeOf("function");
    expect(exports.AssetRowSkeleton).toBeTypeOf("function");
    expect(exports.Skeleton).toBeTypeOf("function");
    expect(exports.SkeletonCard).toBeTypeOf("function");
    expect(exports.SkeletonRow).toBeTypeOf("function");

    // Error handling
    expect(exports.ErrorBoundary).toBeDefined();

    // Wallet
    expect(exports.AccountCard).toBeTypeOf("function");
    expect(exports.AccountCardCompact).toBeTypeOf("function");
    expect(exports.AccountSidebar).toBeTypeOf("function");
    expect(exports.BalanceList).toBeTypeOf("function");
    expect(exports.WalletConnectButton).toBeTypeOf("function");
    expect(exports.WalletConnectModal).toBeTypeOf("function");
    expect(exports.DEFAULT_WALLET_OPTIONS).toBeDefined();

    // Assets
    expect(exports.AssetBadge).toBeTypeOf("function");
    expect(exports.AssetPill).toBeTypeOf("function");
    expect(exports.ASSET_COLORS).toBeDefined();
    expect(exports.getAssetColor).toBeTypeOf("function");
    expect(exports.isKnownAsset).toBeTypeOf("function");
    expect(exports.AssetFilter).toBeTypeOf("function");
    expect(exports.AssetFilterSkeleton).toBeTypeOf("function");

    // Address
    expect(exports.AddressDisplay).toBeTypeOf("function");

    // Network
    expect(exports.BANNER_CONFIG).toBeDefined();
    expect(exports.NetworkBanner).toBeTypeOf("function");
    expect(exports.NetworkSwitcher).toBeTypeOf("function");

    // Allowances
    expect(exports.AllowanceManager).toBeTypeOf("function");

    // Transactions
    expect(exports.ActivityTimeline).toBeTypeOf("function");
    expect(exports.ClaimableBalanceCard).toBeTypeOf("function");
    expect(exports.FeeCell).toBeTypeOf("function");
    expect(exports.FeeEstimator).toBeTypeOf("function");
    expect(exports.GAS_PRESETS).toBeDefined();
    expect(exports.GasOptimizer).toBeTypeOf("function");
    expect(exports.MAX_CPU_INSTRUCTIONS).toBeTypeOf("number");
    expect(exports.MAX_MEMORY_BYTES).toBeTypeOf("number");
    expect(exports.MIN_CPU_INSTRUCTIONS).toBeTypeOf("number");
    expect(exports.MIN_MEMORY_BYTES).toBeTypeOf("number");
    expect(exports.SOROBAN_MAX_INSTRUCTIONS).toBeTypeOf("number");
    expect(exports.SOROBAN_MAX_MEMORY).toBeTypeOf("number");
    expect(exports.SOROBAN_MIN_INSTRUCTIONS).toBeTypeOf("number");
    expect(exports.SOROBAN_MIN_MEMORY).toBeTypeOf("number");
    expect(exports.SOROBAN_PROTOCOL_LIMITS).toBeDefined();
    expect(exports.MultiSigTransactionBuilder).toBeTypeOf("function");
    expect(exports.TransactionConfirmModal).toBeTypeOf("function");
    expect(exports.TransactionHistory).toBeTypeOf("function");
    expect(exports.TransactionHistoryTable).toBeTypeOf("function");
    expect(exports.TransactionPanel).toBeTypeOf("function");
    expect(exports.TransactionStatusTracker).toBeTypeOf("function");

    // Soroban
    expect(exports.ContractEventFeed).toBeTypeOf("function");
    expect(exports.ContractInteractionDebugger).toBeTypeOf("function");
    expect(exports.SorobanInvokeButton).toBeTypeOf("function");
    expect(exports.SorobanPanel).toBeTypeOf("function");

    // NFT Gallery
    expect(exports.NFTCard).toBeTypeOf("function");
    expect(exports.NFTGallery).toBeTypeOf("function");

    // Portfolio Rebalancer & Staking
    expect(exports.PortfolioRebalancer).toBeTypeOf("function");
    expect(exports.DelegationRow).toBeTypeOf("function");
    expect(exports.RewardHistory).toBeTypeOf("function");
    expect(exports.RewardsPanel).toBeTypeOf("function");
    expect(exports.SwapExecutionTracker).toBeTypeOf("function");
    expect(exports.PieChart).toBeTypeOf("function");
    expect(exports.ValidatorCard).toBeTypeOf("function");
    expect(exports.ValidatorSearch).toBeTypeOf("function");

    // Utilities
    expect(exports.BASE_FEE_STROOPS).toBeTypeOf("number");
    expect(exports.buildRebalanceRecord).toBeTypeOf("function");
    expect(exports.computeAllocationDiffs).toBeTypeOf("function");
    expect(exports.computeCurrentAllocations).toBeTypeOf("function");
    expect(exports.createInitialExecution).toBeTypeOf("function");
    expect(exports.DEFAULT_SWAP_FEE_PCT).toBeTypeOf("number");
    expect(exports.estimateSlippagePct).toBeTypeOf("function");
    expect(exports.estimateSwapCostUsd).toBeTypeOf("function");
    expect(exports.formatPct).toBeTypeOf("function");
    expect(exports.formatUsd).toBeTypeOf("function");
    expect(exports.generateSwapSuggestions).toBeTypeOf("function");
    expect(exports.isTargetValid).toBeTypeOf("function");
    expect(exports.MIN_TRADE_USD).toBeTypeOf("number");
    expect(exports.normaliseTargets).toBeTypeOf("function");
    expect(exports.SLIPPAGE_BASE_PCT).toBeTypeOf("number");
    expect(exports.SLIPPAGE_MARKET_IMPACT_PER_1K).toBeTypeOf("number");
    expect(exports.totalFeeStroops).toBeTypeOf("function");
    expect(exports.totalRebalanceCostUsd).toBeTypeOf("function");
    expect(exports.updateSwapStatus).toBeTypeOf("function");
    expect(exports.weightedAverageSlippage).toBeTypeOf("function");
    expect(exports.QRCode).toBeTypeOf("function");
    expect(exports.SwapSimulator).toBeTypeOf("function");

    // Staking Utilities
    expect(exports.aggregateDailyRewards).toBeTypeOf("function");
    expect(exports.createDefaultFilter).toBeTypeOf("function");
    expect(exports.DELEGATION_BASE_FEE_STROOPS).toBeTypeOf("number");
    expect(exports.estimateDelegationFeeXlm).toBeTypeOf("function");
    expect(exports.filterValidators).toBeTypeOf("function");
    expect(exports.formatStakingPct).toBeTypeOf("function");
    expect(exports.formatXlm).toBeTypeOf("function");
    expect(exports.generateMockRewardHistory).toBeTypeOf("function");
    expect(exports.MIN_DELEGATION_XLM).toBeTypeOf("number");
    expect(exports.MOCK_DELEGATIONS).toBeDefined();
    expect(exports.MOCK_REWARD_SCHEDULE).toBeDefined();
    expect(exports.MOCK_VALIDATORS).toBeDefined();
    expect(exports.REWARD_HISTORY_DAYS).toBeTypeOf("number");
    expect(exports.STROOPS_PER_XLM).toBeTypeOf("number");
    expect(exports.totalClaimableXlm).toBeTypeOf("function");
    expect(exports.totalDelegatedXlm).toBeTypeOf("function");
    expect(exports.totalPendingXlm).toBeTypeOf("function");
    expect(exports.totalRewardHistoryXlm).toBeTypeOf("function");
    expect(exports.validateDelegationAmount).toBeTypeOf("function");

    // Features & Providers
    expect(exports.WalletStatusBadge).toBeTypeOf("function");
    expect(exports.TransactionFeeCalculator).toBeTypeOf("function");
    expect(exports.ContractInteractionBuilder).toBeTypeOf("function");
    expect(exports.GovernanceDashboard).toBeTypeOf("function");
    expect(exports.AccountBalanceChart).toBeTypeOf("function");
    expect(exports.SorokitProvider).toBeTypeOf("function");
    expect(exports.useSorokit).toBeTypeOf("function");
    expect(exports.ToastProvider).toBeTypeOf("function");
    expect(exports.useToast).toBeTypeOf("function");
    expect(exports.ToastContainer).toBeTypeOf("function");
    expect(exports.Tooltip).toBeTypeOf("function");
  });

  it("re-exports public types from client", () => {
    type Expected = {
      account: exports.AccountData;
      balance: exports.Balance;
      transaction: exports.Transaction;
      claimableBalance: exports.ClaimableBalance;
      contractEvent: exports.ContractEvent;
      networkInfo: exports.NetworkInfo;
      invokeParams: exports.InvokeParams;
    };
    const actual: Expected = {} as Expected;
    expect(actual).toBeDefined();
  });
});
