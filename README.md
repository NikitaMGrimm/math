# Math Preprints & Proof Notes

Public collection of AI-assisted mathematical preprints and supporting proof notes on Diophantine approximation, digit expansions, multi-base shrinking targets, simultaneous recurrence, and Fourier decay.

**Web index (GitHub Pages):** https://nikitamgrimm.github.io/math/  
**Agent-readable catalog:** [llms.txt](llms.txt) · **Checksums:** [SHA256SUMS](SHA256SUMS)

## Provenance and verification status

These manuscripts were produced with AI assistance (research drafting and orchestration across Codex / GPT 6.2 Astra and GPT 6.2 Sol, directed by Nikita Maximilian Grimm). Each preprint below has passed an independent adversarial LLM full-manuscript audit on the exact delivered `.tex`/`.pdf` pair, with byte-identical `pdflatex` rebuilds.

- **Not yet human peer-reviewed or formally verified in Lean 4.** Unformalized proofs may still contain subtle errors; please open an issue if you find one.
- **Priority and attribution:** We defer completely to the mathematics community on priority, credit, and concurrent work. Known partial-access caveats and related literature are documented inside each paper and folder README.
- **Lean 4:** Future formalizations will live under a shared top-level `lean/` Lake workspace as they are added.

## Preprints (5 manuscripts · 132 pages)

| # | Title | Pages | Files | Lean |
|---:|---|---:|---|---|
| 1 | [Full index prefixes in combinatorial sequences and simultaneous digit windows](preprints/self-prefix-seven-bases/) | 31 | [PDF](preprints/self-prefix-seven-bases/self-prefix-seven-bases.pdf) · [TeX](preprints/self-prefix-seven-bases/self-prefix-seven-bases.tex) | Pending |
| 2 | [Simultaneous shrinking targets on the diagonal in several integer bases](preprints/multibase-shrinking-targets/) | 21 | [PDF](preprints/multibase-shrinking-targets/multibase-shrinking-targets.pdf) · [TeX](preprints/multibase-shrinking-targets/multibase-shrinking-targets.tex) | Pending |
| 3 | [Rational approximation to power-sum quotients and simultaneous recurrence](preprints/roth-power-sums-recurrence/) | 34 | [PDF](preprints/roth-power-sums-recurrence/roth-power-sums-recurrence.pdf) · [TeX](preprints/roth-power-sums-recurrence/roth-power-sums-recurrence.tex) | Pending |
| 4 | [Sharp Fourier decay for simultaneous power targets and recurrence](preprints/fourier-decay-powers-recurrence/) | 22 | [PDF](preprints/fourier-decay-powers-recurrence/fourier-decay-powers-recurrence.pdf) · [TeX](preprints/fourier-decay-powers-recurrence/fourier-decay-powers-recurrence.tex) | Pending |
| 5 | [Fourier decay for shrinking-target centers of hyperbolic toral automorphisms](preprints/hyperbolic-toral-fourier-targets/) | 24 | [PDF](preprints/hyperbolic-toral-fourier-targets/hyperbolic-toral-fourier-targets.pdf) · [TeX](preprints/hyperbolic-toral-fourier-targets/hyperbolic-toral-fourier-targets.tex) | Pending |

### Highlights

1. **Full index prefixes (`self-prefix-seven-bases`):** Binary $\binom{2n+s}{n+t}$ begins with $n$ in every $[X, X^{3/2+\varepsilon}]$ and $\gg (\log\log X)(\log\log\log X)$ times up to $X$. Classifies the exact seven radices ($2,3,4,8,9,16,32$) admitting zero-entropy circle-map survivors for $C b^{hn} n^{1-p}(1-\gamma/n+O(n^{-2}))$; decides joint prefix–suffix infinitude for integer-valued polynomials (universal finiteness for $n^d+c$); and proves large Zeckendorf prefixes of $n^2+c$ are exactly the Lucas numbers $L_k$ with $c+2(-1)^k\ge 0$.
2. **Multibase shrinking targets (`multibase-shrinking-targets`):** Proves local Hausdorff dimension $(1-\tau)/(1+\tau)$ ($0\le\tau<1$) and $0$ ($\tau\ge 1$) for binary–ternary diagonal targets $E_{2,3}(y;\psi)$ at every target and nonmonotone radius, removing the $abc$ conjecture from Li–Liao–Velani–Zorin (2023, §5.5 Remark 13). Refutes both sides of printed Eq. (75) at $(2,17)$ and $(2,6)$, establishes arbitrary-speed $k$-base partition and translated-overlap laws, and proves the exact exceptional-slope spectrum (crediting Tapia's Lemma 2 for the universal upper bound).
3. **Power-sum quotients and recurrence (`roth-power-sums-recurrence`):** Proves optimal Roth exponent $2$ under the original hypothesis of Corvaja–Zannier (2005, Remark (v), p. 740) uniformly over $1 \le q \le Q^n$ for every $1 < Q < 2$ (sharp at $Q=2$), with arbitrary-rank rational-function subspace descent for simultaneous Schmidt exponent $1+1/m$, repeated algebraic roots and complex embeddings, higher-degree cutoffs, and exact local Hausdorff dimension for simultaneous diagonal recurrence across any finite family of pairwise coprime bases.
4. **Powers versus recurrence Fourier decay (`fourier-decay-powers-recurrence`):** At radius $3^{-\tau n}$ ($0<\tau<1$), simultaneous powers $(2^n, 3^n)$ and shifted-power recurrence $(2^n-1, 3^n-1)$ share Hausdorff dimension $(1-\tau)/(1+\tau)$ and Fourier dimension $0$, yet obey distinct sharp Rajchman decay criteria for regular gauges $h(\log(e+|\xi|))$: $\sum h(n)/n = \infty$ ($o(1/\log\log|\xi|)$) for powers (even with arbitrary moving phases) versus $\sum h(n) = \infty$ ($o(1/\log|\xi|)$) for recurrence, with single compact all-subcritical-energy measures and an absolute-normality contrast.
5. **Hyperbolic toral automorphisms (`hyperbolic-toral-fourier-targets`):** For every hyperbolic $A\in\mathrm{GL}_2(\mathbb{Z})$ and $\tau>1$, target centers $D\subseteq P\subseteq V$ with dense/nonempty/varying-witness fibers share local Hausdorff dimension $1+1/\tau$ and Fourier dimension $0$, yet optimal full-time decay splits three ways by arc geometry: $o(1/\log\log|\xi|)$ on unstable eigenlines, $o(1/\log|\xi|)$ on mixed lines, and $o((\log|\xi|)^{-3/2})$ on regular $C^2$ arcs with nonzero curvature somewhere in every interval (even at isolated eigentangencies). A glued flat+curved arc separates $D$ (exponent $1$) from $P,V$ (exponent $3/2$).

## Standalone Research Notes

Reviewed companion notes not yet folded into a full preprint:

- [notes/weighted-products.md](notes/weighted-products.md) — Exact weighted $k$-base multiplicative shrinking-target dimension law.
- [notes/parabola.md](notes/parabola.md) — One- and two-denominator shrinking targets on the parabola $(x, x^2)$ and higher Veronese curves.
- [notes/additive-structure.md](notes/additive-structure.md) — Synchronized 3-term arithmetic progressions and quadratic triples $(x, x+d, x+d^2)$.
- [notes/thresholds.md](notes/thresholds.md) — Closing the uniform one-base parabola fixed-target gap ($0\le\tau<1/2$) and narrowing the synchronized quadratic-triple threshold to $((1-\log_3 2)/2, 1/2)$.

## License

Licensed under [CC BY 4.0](LICENSE).
